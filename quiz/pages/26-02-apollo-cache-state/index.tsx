import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards (page:$page){
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 40px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 13px;

`
const Column = styled.div`
  width: 30%;
  text-align: center;
  font-size: 16px;
    
`
const Input = styled.input`
  width: 30%;
  font-size: 16px;
  height: 40px;
    
`
const initialInputs = {
    writer: "",
    password: "",
    title: "",
    contents: "",
  };
export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data, fetchMore} = useQuery(FETCH_BOARDS);
  const [inputs, setInputs] = useState(initialInputs);

  const onChangeInput = (event) => {
      setInputs((prev)=>({
          ...prev,
          [event.target.id]: event.target.value,
      }))
  }

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, {data}){
        const deletedId = data.deleteBoard
        cache.modify({
            fields:{
                // 여기 prev에는 현재의 상태, 10개가 담겨있는 배열이겠지 ? 
                
                fetchBoards: (prev, {readField})=>{
                    const filteredPrev = prev.filter(el =>readField("_id",el) !== deletedId)
                    
                    // el._id가 안되므로 readField를 이용하여 꺼내기
                    
                    return[...filteredPrev]
                }
            }
        })
        
      }
    });
    console.log(data)
  };
  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: inputs.writer,
          password: inputs.password,
          title: inputs.title,
          contents: inputs.contents,
        },
      },
      update(cache,{data}){
        data.createBoard
        cache.modify({
            fields:{
                fetchBoards: (prev)=>{
                    return[data.createBoard, ...prev]
                }
            }

        })
      }
    });
  };


  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>작성자 : {el.writer}</Column>
          <Column>제목 : {el.title}</Column>
          <Column>내용 : {el.contents}</Column>
          <button onClick={onClickDelete(el._id)}>X</button>
        </Row>
      ))}
      작성자: <Input type = "text" id = "writer" onChange={onChangeInput}/><br/>
      제목: <Input type = "text" id = "title" onChange={onChangeInput}/><br/>
      비밀번호: <Input type = "password" id="password" onChange={onChangeInput}/><br/>
      내용: <Input type = "text" id="contents" onChange={onChangeInput}/><br/>
      <button onClick={onClickSubmit}>새로운 글 등록하기</button>
    </div>
  );
}


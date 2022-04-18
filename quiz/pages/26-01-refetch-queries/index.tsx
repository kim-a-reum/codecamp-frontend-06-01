import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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
  justify-content: flex-start;
  width: 1200px;
  height: 40px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  font-size: 13px;

`
const Column = styled.div`
  width: 25%;
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
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [inputs, setInputs] = useState(initialInputs);

  const onChangeInput = (event) => {
      setInputs((prev)=>({
          ...prev,
          [event.target.id]: event.target.value,
      }))
  }

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: inputs.writer,
          password: inputs.password,
          title: inputs.title,
          contents: inputs.contents,
        },
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };


  return (
    <div><Row>
        <Column>작성자</Column>
        <Column>제목</Column>
        <Column>내용</Column>
        <Column>삭제하기</Column>
    </Row>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <button onClick={onClickDelete(el._id)}>X</button>
        </Row>
      ))}
      작성자: <Input type = "text" id = "writer" onChange={onChangeInput}/><br/>
      제목: <Input type = "text" id = "title" onChange={onChangeInput}/><br/>
      비밀번호: <Input type = "password" id="password" onChange={onChangeInput}/><br/>
      내용: <Input type = "text" id="contents" onChange={onChangeInput}/><br/>
      <button onClick={onClickSubmit}>새로운 글 등록하기 😎</button>
    </div>
  );
}


import { gql, useMutation, useQuery } from "@apollo/client";

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

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
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
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "summer",
          password: "123",
          title: "위경련초기증상",
          contents: "윗배를쥐어짜는느낌 ㅠ 빈속에 커피금지",
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
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}




 // 1. 구조분해 할당으로 함수 파라미터 받기
  // function onClickAAA({ name, age, school }){
  //   console.log(name)
  // }

  // const child = {
  //   name: "철수",
  //   age: 13,
  //   school: "다람쥐초등학교"
  // }
  // onClickAAA(child)

  // 2. 안좋은 옛날 방식
  // function onClickAAA(name, age, school){
  //   console.log(name)
  // }

  // const name: "철수"
  // const age: 13
  // const school: "다람쥐초등학교"
  // onClickAAA(name, 8 , school)
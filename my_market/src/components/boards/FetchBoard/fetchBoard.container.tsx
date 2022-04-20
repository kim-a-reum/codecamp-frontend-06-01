import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FetchBoardPageUI from "./fetchBoard.presenter";


const FETCH_BOARD = gql`
  query FetchBoard($boardId: ID!) {
    fetchBoard(boardId:$boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      deletedAt
      images

    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;


export default function FetchBoardPage(){
    console.log("여기")
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.boardid) },
      });
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = () => {
        deleteBoard({
          variables: { boardId: String(data.fetchBoard._id) },
        });
       alert("게시물 삭제완료 ! 목록페이지로 넘어갑니다")
        router.push(`/main`);
      };
    
      const OnClickEdit = () => {
        router.push(`/main/${router.query.boardid}/edit`);
      };
    
      const onClickBack = () => {
        router.push(`/main`);
        // prev 사용?
      };

console.log(data)
    return(
<div>

<FetchBoardPageUI
 data={data}
 onClickDelete={onClickDelete}
 OnClickEdit={OnClickEdit}
 onClickBack={onClickBack}/>
</div>
    )


}
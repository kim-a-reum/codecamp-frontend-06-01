//게시글 조회

import FetchBoardPage from "../../../src/components/board//FetchBoard/FetchBoard.container";
import BoardCommentPage from "../../../src/components/board/BoardComments/BoardComments.container";
import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../src/commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../../../src/components/board/BoardComments/BoardComments.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../src/components/board/FetchBoard/FetchBoard.queries";


export default function OpenFetchBoard() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const {data : data2, fetchMore} = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
    
  });
  

  return (
    <>
        
      <FetchBoardPage/>
      <BoardCommentPage
      data={data}
      data2={data2}
      fetchMore={fetchMore}
      
      />
     
    
    </>
  );
}

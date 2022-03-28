//게시글 조회

import FetchBoardPage from "../../../src/components/board//FetchBoard/FetchBoard.container";
import BoardCommentPage from "../../../src/components/board/BoardComments/BoardComments.container";

export default function OpenFetchBoard() {
  return (
    <>
      <FetchBoardPage />
      <BoardCommentPage />
    </>
  );
}

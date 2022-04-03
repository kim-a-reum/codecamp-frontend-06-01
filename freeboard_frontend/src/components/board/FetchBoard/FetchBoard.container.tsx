
import {useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import FetchBoardUI from "./FetchBoard.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./FetchBoard.queries";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../commons/types/generated/types";
import { Modalsuccess } from "../../utility";

export default function FetchBoardPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  //게시물 삭제버튼함수
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(data.fetchBoard._id) },
    });
    Modalsuccess("게시물 삭제 완료! 목록 페이지로 넘어갑니다 !");
    router.push(`/boards`);
  };

  const OnClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickBack = () => {
    router.push(`/boards`);
  };
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };
  console.log(router.query)
console.log(data)
  return (
    <FetchBoardUI
      data={data}
      onClickDelete={onClickDelete}
      OnClickEdit={OnClickEdit}
      onClickBack={onClickBack}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}

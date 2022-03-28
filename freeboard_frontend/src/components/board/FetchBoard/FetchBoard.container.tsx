import { route } from "next/dist/server/router";
import { Router, useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import FetchBoardUI from "./FetchBoard.presenter";
import {
  FETCH_BOARD,
  CREATE_COMMENT,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
} from "./FetchBoard.queries";
import { useState, ChangeEvent } from "react";

export default function FetchBoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = () => {
    deleteBoard({
      //게시물 삭제버튼함수
      variables: { boardId: String(data.fetchBoard._id) },
    });
    alert("게시물 삭제 완료! 목록 페이지로 넘어갑니다 !");
    router.push(`/boards`);
  };

  const OnClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickBack = () => {
    router.push(`/boards`);
  };

  return (
    <FetchBoardUI
      data={data}
      onClickDelete={onClickDelete}
      OnClickEdit={OnClickEdit}
      onClickBack={onClickBack}
    />
  );
}

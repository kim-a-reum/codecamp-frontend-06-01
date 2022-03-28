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
import {
  ImyVariables,
  ImycreateBoardCommentInput,
  IBoardCommentMap,
} from "./FetchBoard.types";

export default function FetchBoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  //내가 오늘 배운것이다 usequery를 여러번 쓸때 data 받아오는 값을 다르게 지정을 해주는것과
  // query 부분은 따로 함수를 지정해줄필요 없으니까 variables 값을 여기에 꼭 적어주어야 하고!
  // usemutation과의 차이를 잘 기억해놓자고 !!!

  const [writer, setMyWriter] = useState("");
  const [contents, setMyContents] = useState("");
  const [rating, setMyRating] = useState(123);
  //rating의 고유값이 숫자이기 때문에 애초 설정값을 숫자로 넣어주는것

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setMyRating(Number(event.target.value));
  };
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

  const mycreateBoardCommentInput: ImycreateBoardCommentInput = {
    writer,
    contents,
    rating,
  };
  const myVariable: ImyVariables = {
    createBoardCommentInput: mycreateBoardCommentInput,
    boardId: String(router.query.boardId),
  };
  const CreateComments = async () => {
    const result = await createBoardComment({
      variables: myVariable,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    console.log(result);
    setMyWriter("");
  };

  return (
    <FetchBoardUI
      data={data}
      data2={data2}
      onClickDelete={onClickDelete}
      OnClickEdit={OnClickEdit}
      onClickBack={onClickBack}
      CreateComments={CreateComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      writer={writer}
    />
  );
}

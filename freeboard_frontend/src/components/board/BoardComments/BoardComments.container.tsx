import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ImyVariables } from "./BoardComments.types";
import { ImycreateBoardCommentInput } from "./BoardComments.types";
import { IBoardCommentMap } from "./BoardComments.types";
import { CREATE_COMMENT } from "./BoardComments.queries";
import { FETCH_BOARD_COMMENTS } from "./BoardComments.queries";
import { ChangeEvent } from "react";
import BoardCommentPageUI from "./BoardComments.presenter";

export default function BoardCommentPage() {
  const router = useRouter();

  const [writer, setMyWriter] = useState("");
  const [contents, setMyContents] = useState("");
  const [rating, setMyRating] = useState(0);
  const [password, setMyPassWord] = useState("");

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setMyRating(Number(event.target.value));
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassWord(event.target.value);
  };

  const mycreateBoardCommentInput: ImycreateBoardCommentInput = {
    writer,
    contents,
    rating,
    password,
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
    setMyContents("");
    setMyRating("");
    setMyPassWord("");
  };

  return (
    <BoardCommentPageUI
      data2={data2}
      CreateComments={CreateComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onChangePassWord={onChangePassWord}
      writer={writer}
      contents={contents}
      rating={rating}
      password={password}
    />
  );
}

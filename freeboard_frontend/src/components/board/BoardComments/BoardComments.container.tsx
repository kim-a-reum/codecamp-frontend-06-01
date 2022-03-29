import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ImyVariables } from "./BoardComments.types";
import { ImycreateBoardCommentInput } from "./BoardComments.types";
// import { IBoardCommentMap } from "./BoardComments.types";
import { CREATE_COMMENT } from "./BoardComments.queries";
import { FETCH_BOARD_COMMENTS, DELETE_COMMENT } from "./BoardComments.queries";
import { ChangeEvent } from "react";
import BoardCommentPageUI from "./BoardComments.presenter";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";

export default function BoardCommentPage() {
  const router = useRouter();

  const [writer, setMyWriter] = useState("");
  const [contents, setMyContents] = useState("");
  const [rating, setMyRating] = useState(3);
  const [password, setMyPassWord] = useState("");

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  // const [deleteBoardComment] =
  //   useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_COMMENT);
  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassWord(event.target.value);
  };
  const onChangeRating = (value: number) => {
    setMyRating(value);
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
    setMyRating(2);
    setMyPassWord("");
  };
  // const onClickDelete = (event) => {
  //   deleteBoardComment({
  //     variables: { boardCommentId: event.target.id },
  //     refetchQueries: [{ query: DELETE_COMMENT }],
  //   });
  // };

  return (
    <BoardCommentPageUI
      data2={data2}
      CreateComments={CreateComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onChangePassWord={onChangePassWord}
      // onClickDelete={onClickDelete}
      writer={writer}
      contents={contents}
      rating={rating}
      password={password}
    />
  );
}

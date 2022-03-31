import { useState, ChangeEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  ImycreateBoardCommentInput,
  ImyVariables,
} from "./BoardComments.types";
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComments.queries";
import BoardCommentPageUI from "./BoardComments.presenter";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardCommentPage() {
  const router = useRouter();

  const [writer, setMyWriter] = useState("");
  const [contents, setMyContents] = useState("");
  const [rating, setMyRating] = useState(3);
  const [password, setMyPassWord] = useState("");
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoardComment] =
    useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_COMMENT);
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
  const onClickDelete = () => {
    deleteBoardComment({
      variables: {
        boardCommentId: deleteId,
        password: deletePassword,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
    setIsOpenModal((prev) => !prev);
  };

  function onClickOpenModal(event: MouseEvent<HTMLButtonElement>) {
    setIsOpenModal((prev) => !prev);
    if (event.target instanceof Element) setDeleteId(event.target.id);
  }
  const onChangeDeletePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePassword(event.target.value);
  };

  return (
    <BoardCommentPageUI
      data2={data2}
      CreateComments={CreateComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onChangePassWord={onChangePassWord}
      onClickDelete={onClickDelete}
      onClickOpenModal={onClickOpenModal}
      onChangeDeletePassWord={onChangeDeletePassWord}
      isOpenModal={isOpenModal}
      writer={writer}
      contents={contents}
      rating={rating}
      password={password}
    />
  );
}

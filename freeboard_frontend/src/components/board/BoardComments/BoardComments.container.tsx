import { useState, ChangeEvent } from "react";
import { useMutation} from "@apollo/client";
import { useRouter } from "next/router";
import {
  ImycreateBoardCommentInput,
  ImyVariables,
} from "./BoardComments.types";
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  FETCH_BOARD_COMMENTS
} from "./BoardComments.queries";
import BoardCommentPageUI from "./BoardComments.presenter";
import {
  IMutation} from "../../../commons/types/generated/types";
import { MouseEvent } from "react";
import FetchBoardCommentPage from "./FetchBoardComments.presenter";
import InfiniteScroll from 'react-infinite-scroller'
import styled from "@emotion/styled";
import { ModalError } from "../../utility";

const Myscroll = styled.div`
  height:700px;
  overflow:auto;
  width: 1200px;

`

export default function BoardCommentPage(props :any){
  const router = useRouter();
  const [writer, setMyWriter] = useState("");
  const [contents, setMyContents] = useState("");
  const [rating, setMyRating] = useState(0);
  const [password, setMyPassWord] = useState("");
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  
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
    if(writer === ""){
      ModalError({content:" 작성자를 입력해주세요"})
   return } else if(contents === ""){
    ModalError({content:"댓글 내용을 입력해주세요"})
 return } 
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

  const onLoadMore = () => {
    if(!props.data2) return;
    props.fetchMore({
        variables : {page: Math.ceil(props.data2?.fetchBoardComments.length / 10) + 1},
        updateQuery: (prev,{fetchMoreResult}) => {
            if(!fetchMoreResult?.fetchBoardComments) 
            return {fetchBoardComments:[...prev.fetchBoardComments]}
            return {
                fetchBoardComments: [...prev.fetchBoardComments,...fetchMoreResult.fetchBoardComments]
            };
        },
    });
};


  return (
    <div>
    <BoardCommentPageUI
      CreateComments={CreateComments}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onChangePassWord={onChangePassWord}
      writer={writer}
      contents={contents}
      rating={rating}
      password={password}
      data={props.data}
      />    

<Myscroll>
      <InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
    >
{props.data2?.fetchBoardComments.map((el:any, index: Number)=>(
  <FetchBoardCommentPage
  key={el._id}
  isOpenModal={isOpenModal}
  onChangeDeletePassWord={onChangeDeletePassWord}
  onClickDelete={onClickDelete}
  onLoadMore={onLoadMore}
  writer={writer}
  contents={contents}
  rating={rating}
  password={password}
  onClickOpenModal={onClickOpenModal}
  data2={props.data2}
  el={el}
  index = {index}
  />
  )
  )}
</InfiniteScroll>
  </Myscroll>
  
    </div>
  );
}

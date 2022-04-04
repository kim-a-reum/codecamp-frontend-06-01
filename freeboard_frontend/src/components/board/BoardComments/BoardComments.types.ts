import { ChangeEvent, MouseEvent } from "react";


export interface IBoardCommentsUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  CreateComments: () => void;
  onChangeRating: (value: number) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  
  result?: any;
  comments?: any;
  writer: any;
  contents: any;
  rating: any;
  password: any;
  data?: any;
  
}
export interface ImyVariables {
  createBoardCommentInput: ImycreateBoardCommentInput;
  boardId: String;
}

export interface ImycreateBoardCommentInput {
  writer?: String;
  contents?: String;
  rating?: number;
  password?: String;
}

export interface IBoardCommentMap {
  onClickOpenModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onLoadMore : () => void;
  onClickDelete: () => void;
  onChangeDeletePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpenModal: boolean;
  el?: any;
  _id?: string;
  writer?: string;
  contents?: string;
  createdAt?: string;
  rating?: number;
  data2?: any;
  index : Number
  password : String;
  
}

export interface IMyUpdateVariables {
  updateBoardCommentInput?: ImyupdateBoardCommentInput;
  password?: string;
  boardCommentId?: string;
}
export interface ImyupdateBoardCommentInput {
  contents?: String
  rating?: Number
}
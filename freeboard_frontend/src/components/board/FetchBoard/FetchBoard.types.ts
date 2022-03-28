import { ChangeEvent } from "react";

export interface IMyFetchBoardUIprops {
  onClickDelete: () => void;
  OnClickEdit: () => void;
  onClickBack: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  CreateComments: () => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  data2?: any;
  result?: any;
  comments?: any;
  writer: any;
  contents: any;
  rating: any;
  password: any;
}

export interface ImyVariables {
  createBoardCommentInput: ImycreateBoardCommentInput;
  boardId: String;
}
export interface ImycreateBoardCommentInput {
  writer: String;
  contents: String;
  rating: Number;
  password: String;
}

export interface IBoardCommentMap {
  el?: any;
  _id?: string;
  writer?: string;
  contents?: string;
  createdAt?: string;
  rating?: Number;
}

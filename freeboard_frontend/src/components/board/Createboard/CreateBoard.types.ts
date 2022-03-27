import { ChangeEvent } from "react";

export interface ICreateBoardProps {
  isEdit: boolean;
  data?: any;
}

export interface ICreateBoardUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  OnClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
  nameError: String;
  passwordError: String;
  titleError: String;
  contentsError: String;
}

export interface IFinshButtonProps {
  isActive: boolean;
}

export interface IMyVariables {
  updateBoardInput: ImyupdateBoardInput;
  password: string;
  boardId: string;
}
export interface ImyupdateBoardInput {
  title?: string;
  contents?: string;
}

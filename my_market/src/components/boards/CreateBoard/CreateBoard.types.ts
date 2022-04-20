import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ICreateBoardProps {
  isEdit: boolean;
  data?: any
}

export interface ICreateBoardUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickFetch : () => void;
  onClickMain : () => void;
  isEdit: boolean;
  data?: Pick<IQuery,"fetchBoard">;
  fileRef : any
  fileUrls: any
 
 
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

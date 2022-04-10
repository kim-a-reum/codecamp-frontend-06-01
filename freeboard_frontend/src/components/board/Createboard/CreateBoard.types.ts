import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ICreateBoardProps {
  isEdit: boolean;
  data?: any;
}

export interface ICreateBoardUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickAddressSearch: () => void;
  onClickSubmit: () => void;
  OnClickUpdate: () => void;
  fileRef : any
  fileUrls:any
  isOpen: boolean;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  nameError: String;
  passwordError: String;
  titleError: String;
  contentsError: String;
  zipcode: string;
  address: string;
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
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

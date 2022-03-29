import { IQuery } from "../../../commons/types/generated/types";

export interface IMyFetchBoardUIprops {
  onClickDelete: () => void;
  OnClickEdit: () => void;
  onClickBack: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}

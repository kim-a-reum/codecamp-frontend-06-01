import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export interface IBoardsUIProps {
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;

  data?: any;
}

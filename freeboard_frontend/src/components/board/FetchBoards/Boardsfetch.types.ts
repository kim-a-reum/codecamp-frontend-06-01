import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export interface IBoardsUIProps {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;

  data?: any;
}

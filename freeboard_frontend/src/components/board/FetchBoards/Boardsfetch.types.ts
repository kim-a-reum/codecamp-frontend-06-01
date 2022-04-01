import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export interface IBoardsUIProps {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPage : (event: MouseEvent<HTMLDivElement>) => void;
  GoCreate : (event: MouseEvent<HTMLButtonElement>) => void;
  prevActive : any
  nextActive : any
  startPage: any
  lastPage: any
  current: any
  data?: any;
}

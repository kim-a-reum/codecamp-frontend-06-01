import { ChangeEvent, MouseEvent} from "react";

export interface IBoardsUIProps {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPage : (event: MouseEvent<HTMLButtonElement>) => void;
  GoCreate : (event: MouseEvent<HTMLButtonElement>) => void;
  onClickFetch: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event:ChangeEvent<HTMLInputElement>)=>void;
  prevActive : any
  nextActive : any
  startPage: any
  lastPage: any
  current: any
  data?: any;
  dataBestBoards?: any;
}

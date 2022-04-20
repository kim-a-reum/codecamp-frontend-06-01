import { IBoardsUIProps } from "./fetchboards.types";
import * as S from "./fetchboards.styled"
import { getDate } from "../../utility";
export default function FetchBoardsPageUI(props: IBoardsUIProps){


    return(
<>

          <S.Row key={props.el._id}>

            <S.ColumnTitle id={props.el._id} onClick={props.onClickDetail}>
                {props.el.title}
            </S.ColumnTitle>
            <S.Column>{getDate(props.el.createdAt)}</S.Column>

          </S.Row>
      
</>
    )


}
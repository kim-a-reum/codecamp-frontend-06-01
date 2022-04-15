import { IBoardsUIProps } from "./fetchboards.types";
import * as S from "./fetchboards.styled"
import { getDate } from "../../utility";
export default function FetchBoardsPageUI(props: IBoardsUIProps){

console.log(props.data)
    return(
<>
{props.data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>

            <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
                {el.title}
            </S.ColumnTitle>
            <S.Column>{getDate(el.createdAt)}</S.Column>

          </S.Row>
        ))}
</>
    )


}
import * as S from "./fetchboard.styled"
import { IMyFetchBoardUIprops } from "./fetchboard.types"

export default function FetchBoardPageUI( props: IMyFetchBoardUIprops){


    return(
<div>
        <S.Wrapper>
            <S.Title>제목 : {props.data?.fetchBoard.title}</S.Title>
            {props.data?.fetchBoard.images?.filter((el:string)=>el)
                  
                  .map((el:string)=>(
                      <S.Images key={el}
                      src={`https://storage.googleapis.com/${el}`}/>
                  ))}
            <S.Contents>
                <S.Name> {props.data ? (
                        props.data.fetchBoard.writer) : (
                        <div> 작성자 loading...중</div>
                    )}{" "}</S.Name>
                <S.RealContents> 내용 : {props.data?.fetchBoard.contents} </S.RealContents>
            </S.Contents>
        </S.Wrapper>
        <S.WrapperBottom>
            <button onClick={props.onClickBack}>글목록</button>
            <button onClick={props.OnClickEdit}>수정</button>
            <button onClick={props.onClickDelete}>삭제</button>
        </S.WrapperBottom>

</div>
    )


}
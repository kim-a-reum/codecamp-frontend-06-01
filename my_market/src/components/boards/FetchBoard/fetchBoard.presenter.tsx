import * as S from "./fetchboard.styled"
import { IMyFetchBoardUIprops } from "./fetchboard.types"

export default function FetchBoardPageUI( props: IMyFetchBoardUIprops){


    return(
<div>
        <S.Wrapper>
            <S.Title>제목 : {props.data?.fetchBoard.title}</S.Title>
            <S.ImageBox>

            {props.data?.fetchBoard.images?.filter((el:string)=>el)
                  
                  .map((el:string)=>(
                      <S.Images key={el}
                      src={`https://storage.googleapis.com/${el}`}/>
                      ))}
            </S.ImageBox>
            <S.Contents>
                <S.Name>
                    <S.Icon></S.Icon>
                     {props.data ? (
                        props.data.fetchBoard.writer) : (
                        <div> 작성자 loading...중</div>
                    )}{" "}</S.Name>
                <S.RealContents> {props.data?.fetchBoard.contents} </S.RealContents>
            </S.Contents>
        </S.Wrapper>
        <S.WrapperBottom>
            <S.Mybutton onClick={props.onClickBack}>글목록</S.Mybutton>
            <S.Mybutton  onClick={props.OnClickEdit}>수정</S.Mybutton>
            <S.Mybutton  onClick={props.onClickDelete}>삭제</S.Mybutton>
        </S.WrapperBottom>

</div>
    )


}
import * as S from "./createComment.styled"

export default function CreateCommentPageUI(props :any){
    return (
        <>
         <S.Body>
        <S.Wrapper>
          <S.WrapperComments>
            <S.TitleComments>
              댓글작성
            </S.TitleComments>
            
            <S.CreateComments>
              <S.CommentsTop>
              </S.CommentsTop>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  onChange={props.onChangeContents}
                  value={props.contents}
                />
                <S.CommentsUnder>
                  <S.ButtonBox onClick={props.onClickCreate}>
                    작성하기
                  </S.ButtonBox>
                </S.CommentsUnder>
              </S.CommentsMiddle>
            </S.CreateComments>
          </S.WrapperComments>
        </S.Wrapper>
      </S.Body>
        
        </>
    )
}
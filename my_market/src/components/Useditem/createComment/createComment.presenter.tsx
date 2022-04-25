import * as S from "./createComment.styled"

export default function CreateCommentPageUI(props :any){
    
    return (
        <>
         <S.Body>
        <S.Wrapper>
          <S.WrapperComments>
            <S.TitleComments>
              <S.Avatar></S.Avatar>
              상품질문{" "}
            </S.TitleComments>
            <S.CreateComments>
              <S.CommentsTop>
                <S.CommentsProfile
                  type="text"
                //  value={props.data?.user}
                
                />
              </S.CommentsTop>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                  onChange={props.onChangeContents}
                />
                <S.CommentsUnder>
                  <S.TypingBox>
                    {(props.contents.length)}
                    /500
                  </S.TypingBox>
                  <S.ButtonBox onClick={props.onClickCreate}>
                    등록하기
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
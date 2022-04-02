import { IBoardCommentsUIProps } from "./BoardComments.types";

import * as S from "./BoardComments.styled";
import "antd/dist/antd.css";


export default function BoardCommentPageUI(props: IBoardCommentsUIProps) {
 
  return (
    <>

      <S.Body>
        <S.Wrapper>
          <S.WrapperComments>
            <S.TitleComments>
              <S.Avatar></S.Avatar>
              댓글{" "}
            </S.TitleComments>
            <S.CreateComments>
              <S.CommentsTop>
                <S.CommentsProfile
                  type="text"
                  onChange={props.onChangeWriter}
                  placeholder="작성자"
                  value={props.writer}
                />
                <S.CommentsProfile
                  type="password"
                  onChange={props.onChangePassWord}
                  placeholder="비밀번호"
                  value={props.password}
                />
                <S.Star onChange={props.onChangeRating}></S.Star>
              </S.CommentsTop>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  onChange={props.onChangeContents}
                  placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.  "
                  value={props.contents}
                />
                <S.CommentsUnder>
                  <S.TypingBox>
                    <br />
                    0/100
                  </S.TypingBox>
                  <S.ButtonBox onClick={props.CreateComments}>
                    등록하기
                  </S.ButtonBox>
                </S.CommentsUnder>
              </S.CommentsMiddle>
            </S.CreateComments>
          </S.WrapperComments>
        </S.Wrapper>
      </S.Body>
    </>
  );
}

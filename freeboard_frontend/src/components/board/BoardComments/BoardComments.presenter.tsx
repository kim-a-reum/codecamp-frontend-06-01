import { IBoardCommentsUIProps } from "./BoardComments.types";
import * as S from "./BoardComments.styled";
import { IBoardCommentMap } from "./BoardComments.types";
import "antd/dist/antd.css";

export default function BoardCommentPageUI(props: IBoardCommentsUIProps) {
  return (
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
          <S.FetchComments>
            {props.data2?.fetchBoardComments.map((el: IBoardCommentMap) => (
              <S.CommentsBox key={el._id}>
                <S.CommentsIcon></S.CommentsIcon>
                <S.CommentsDetail>
                  <S.CommentsName>
                    <S.RealWriter>작성자 : {el.writer}</S.RealWriter>
                    <S.RealRating>
                      별 {el.rating} 개 <br /> 주셨어요 !{" "}
                    </S.RealRating>
                    <S.Star value={el?.rating} disabled></S.Star>
                  </S.CommentsName>
                  <S.CommentsText>내용 : {el.contents}</S.CommentsText>
                  <S.CommentsDate> {el.createdAt?.slice(0, 10)}</S.CommentsDate>
                </S.CommentsDetail>
                <S.CommentsBack>
                  <S.CommentsEdit></S.CommentsEdit>
                  {/* <S.CommentsDelete onClick={onClickDelete}></S.CommentsDelete> */}
                </S.CommentsBack>
              </S.CommentsBox>
            ))}
          </S.FetchComments>
        </S.WrapperComments>
      </S.Wrapper>
    </S.Body>
  );
}

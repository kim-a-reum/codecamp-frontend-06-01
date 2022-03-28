import * as S from "./FetchBoard.styled";
import { IMyFetchBoardUIprops, IBoardCommentMap } from "./FetchBoard.types";

export default function FetchBoardUI(props: IMyFetchBoardUIprops) {
  return (
    <>
      <div>
        <S.Body>
          <S.Wrapper>
            <S.Top>
              <S.TopAddress>
                {" "}
                <S.AddressBox>
                  서울특별시 영등포구 양산로 200 <br />
                  (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층{" "}
                </S.AddressBox>
              </S.TopAddress>
              <S.TopProfile>
                <S.TopLeft>
                  <S.LeftIcon></S.LeftIcon>
                  <S.LeftName>
                    <S.RealName>
                      {props.data ? (
                        props.data.fetchBoard.writer
                      ) : (
                        <div>loading...</div>
                      )}{" "}
                    </S.RealName>
                    <S.RealDate>
                      {" "}
                      Date : {props.data?.fetchBoard.createdAt.slice(
                        0,
                        10
                      )}{" "}
                    </S.RealDate>
                  </S.LeftName>
                </S.TopLeft>
                <S.TopRight>
                  <S.RightClip></S.RightClip>
                  <S.RightLocation></S.RightLocation>
                </S.TopRight>
              </S.TopProfile>
            </S.Top>
            <S.Middle>
              <S.MiddleTitle>
                게시글 제목 : [{props.data?.fetchBoard.title}]
              </S.MiddleTitle>
              <S.MiddlePhoto></S.MiddlePhoto>
              <S.MiddleContents>
                게시글 내용 : <br /> {props.data?.fetchBoard.contents}
              </S.MiddleContents>
            </S.Middle>
            <S.Under>
              <S.FootVideo>
                <S.ClickCircle>
                  <S.OnClick></S.OnClick>
                </S.ClickCircle>
              </S.FootVideo>
              <S.LikeBox>
                <S.LikeIcon></S.LikeIcon>
                <S.DisLikeIcon></S.DisLikeIcon>
              </S.LikeBox>
            </S.Under>
            <S.WrapperFoot>
              <S.BackButton onClick={props.onClickBack}>목록으로</S.BackButton>
              <S.EditButton onClick={props.OnClickEdit}>
                {" "}
                수정하기{" "}
              </S.EditButton>
              <S.DeleteButton onClick={props.onClickDelete}>
                {" "}
                삭제하기
              </S.DeleteButton>
            </S.WrapperFoot>
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

                  <S.CommentsProfile
                    type="text"
                    onChange={props.onChangeRating}
                    placeholder="점수"
                    value={props.rating}
                  />
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
                        <S.RealRating>별 개수 {el.rating} 개!</S.RealRating>
                      </S.CommentsName>
                      <S.CommentsText>내용 : {el.contents}</S.CommentsText>
                      <S.CommentsDate>
                        {" "}
                        {el.createdAt?.slice(0, 10)}
                      </S.CommentsDate>
                    </S.CommentsDetail>
                    <S.CommentsBack>
                      <S.CommentsEdit></S.CommentsEdit>
                      <S.CommentsDelete></S.CommentsDelete>
                    </S.CommentsBack>
                  </S.CommentsBox>
                ))}
              </S.FetchComments>
            </S.WrapperComments>
          </S.Wrapper>
        </S.Body>
      </div>
    </>
  );
}

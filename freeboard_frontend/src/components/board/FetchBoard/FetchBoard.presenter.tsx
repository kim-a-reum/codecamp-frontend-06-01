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
          </S.Wrapper>
        </S.Body>
      </div>
    </>
  );
}

import { getDate } from "../../utility";
import * as S from "./FetchBoard.styled";
import { IMyFetchBoardUIprops } from "./FetchBoard.types";
import { Tooltip } from "antd";

export default function FetchBoardUI(props: IMyFetchBoardUIprops) {
  return (
    <>
      <div>
        <S.Body>
          <S.Wrapper>
            <S.Top>
              <S.TopAddress>
                {" "}
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
                      Date : {getDate(props.data?.fetchBoard.createdAt)}
                      
                    </S.RealDate>
                  </S.LeftName>
                </S.TopLeft>
                <S.TopRight>
                  <S.RightClip></S.RightClip>
                  <Tooltip title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}>
                  <S.RightLocation>
                  </S.RightLocation>
                  <S.Location>나는 지금 !</S.Location>
                  </Tooltip>
                </S.TopRight>
              </S.TopProfile>
            </S.Top>
            <S.Middle>
              <S.MiddleTitle>
                제목 : {props.data?.fetchBoard.title}
              </S.MiddleTitle>
              <S.MiddlePhoto>
                <S.Photo></S.Photo>
                <S.PhotoSide></S.PhotoSide>
                <S.PhotoContents> 너의 고민을 올려봐 ! 말하고 나면 시원해질거야 ! </S.PhotoContents>
              </S.MiddlePhoto>
              <S.MiddleContents>
                내용 : <br /> {props.data?.fetchBoard.contents}
              </S.MiddleContents>
            </S.Middle>
            <S.Under>
              {props.data?.fetchBoard.youtubeUrl && (
                <S.Youtube
                  url={props.data?.fetchBoard.youtubeUrl}
                  width="486px"
                  height="240px"
                />
              )}

              <S.LikeBox>
                <S.LikeIcon onClick={props.onClickLike}></S.LikeIcon>
                <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
                <S.DisLikeIcon onClick={props.onClickDislike}></S.DisLikeIcon>
                <S.DislikeCount>
                  {props.data?.fetchBoard.dislikeCount}
                </S.DislikeCount>
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

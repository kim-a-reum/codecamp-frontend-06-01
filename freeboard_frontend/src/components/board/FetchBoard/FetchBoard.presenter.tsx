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
              <S.TitleComments> 댓글제목상자 </S.TitleComments>
              <S.CreateComments>
                <input
                  type="text"
                  onChange={props.onChangeWriter}
                  placeholder="작성자"
                  value={props.writer}
                />
                <input
                  type="text"
                  onChange={props.onChangeContents}
                  placeholder="내용"
                />
                <input
                  type="text"
                  onChange={props.onChangeRating}
                  placeholder="점수"
                />
                <button onClick={props.CreateComments}>등록하기</button>
              </S.CreateComments>
              <S.FetchComments>
                {" "}
                댓글 확인
                {/* //여기서 잊지 말아야 할것은 뿌려줄때 Map 함수의 타입을 지정해줘야한다는것 ! 근데 왜지 위에 다른함수 봐보고 다른예시 봐보고 질문할거 깔끔하게 정리해보자  */}
                {props.data2?.fetchBoardComments.map((el: IBoardCommentMap) => (
                  <S.CommentsRow key={el._id}>
                    <S.CommentsColumn>
                      아이디 : {el._id?.slice(-4)}
                    </S.CommentsColumn>
                    <S.CommentsColumn>작성자 : {el.writer} </S.CommentsColumn>
                    <S.CommentsColumn>내용 : {el.contents}</S.CommentsColumn>
                    <S.CommentsColumn>
                      날짜: {el.createdAt?.slice(0, 10)}
                    </S.CommentsColumn>
                  </S.CommentsRow>
                ))}
              </S.FetchComments>
            </S.WrapperComments>
          </S.Wrapper>
        </S.Body>
      </div>
    </>
  );
}

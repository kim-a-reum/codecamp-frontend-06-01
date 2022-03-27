import * as S from "./Boardsfetch.styled";
import { IBoardsUIProps } from "./Boardsfetch.types";
export default function BoardsfetchUI(props: IBoardsUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.TopRow>
          <S.TopColumn>ID</S.TopColumn>
          <S.TopColumn>작성자</S.TopColumn>
          <S.TopColumn>제목</S.TopColumn>
          <S.TopColumn>날짜</S.TopColumn>
          <S.TopColumn>삭제</S.TopColumn>
        </S.TopRow>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.Column>{10 - index}</S.Column>
            <S.Column>{el.writer}</S.Column>
            <S.Column id={el._id} onClick={props.onClickDetail}>
              {el.title}
            </S.Column>
            <S.Column>{String(el.createdAt).slice(2, 10)}</S.Column>
            <S.Column id={el._id} onClick={props.onClickDelete}>
              지우기
            </S.Column>
          </S.Row>
        ))}
      </S.Wrapper>
    </S.Body>
  );
}

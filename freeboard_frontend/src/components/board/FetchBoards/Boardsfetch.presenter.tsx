import * as S from "./Boardsfetch.styled";
import { IBoardsUIProps } from "./Boardsfetch.types";
export default function BoardsfetchUI(props: IBoardsUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.TopRow>
          <S.TopColumn>ID</S.TopColumn>
          <S.TopColumnTitle>제목</S.TopColumnTitle>
          <S.TopColumn>작성자</S.TopColumn>
          <S.TopColumn>날짜</S.TopColumn>
          <S.TopColumn>삭제</S.TopColumn>
        </S.TopRow>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.Column>{10 - index}</S.Column>
            <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
              {el.title}
            </S.ColumnTitle>
            <S.Column>{el.writer}</S.Column>
            <S.Column>{String(el.createdAt).slice(2, 10)}</S.Column>
            <S.DeleteButton id={el._id} onClick={props.onClickDelete}>
              지워
            </S.DeleteButton>
          </S.Row>
        ))}
        <S.Pagination>
        <S.PrevPage onClick={props.onClickPrevPage} disabled={props.prevActive}>&lt;이전 &gt;</S.PrevPage>
        {new Array(10).fill(1).map((_,index)=> 
        index + props.startPage <= props.lastPage &&(
            
            <S.PageNumber key={index + props.startPage} id = {String(index +props.startPage)} onClick={props.onClickPage} 
            buttoncolor={props.startPage + index === props.current}
            ><S.RealNumber>{index + props.startPage}</S.RealNumber></S.PageNumber> 

        ))
        }
         <S.NextPage onClick={props.onClickNextPage} disabled={props.nextActive}>&lt;다음 &gt;</S.NextPage>
        </S.Pagination>
      </S.Wrapper>
      <S.CreateButton onClick={props.GoCreate}>게시물생성 ✏️</S.CreateButton>
    </S.Body>
  );
}

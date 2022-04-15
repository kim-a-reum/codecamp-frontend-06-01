import { getDate } from "../../utility";
import * as S from "./Boardsfetch.styled";
import { IBoardsUIProps } from "./Boardsfetch.types";
import { v4 as uuidv4 } from "uuid";
export default function BoardsfetchUI(props: IBoardsUIProps) {

  return (
    <S.Body>
      <S.WapperBest>
        <S.BestTitle> 베스트 게시글 </S.BestTitle>
        <S.BestBoards>
          {props.dataBestBoards?.fetchBoardsOfTheBest.map((el:any, index:number)=>
          ( <S.BestBoard key={el._id}>
            <S.BoardTop1></S.BoardTop1>
            <S.BoardTitle onClick={props.onClickFetch} 
            id={props.dataBestBoards?.fetchBoardsOfTheBest[index]._id}> 제목 :&nbsp;  
              {props.dataBestBoards?.fetchBoardsOfTheBest[index].title}
            </S.BoardTitle>
            <S.BoardProfile>
              <S.Icon></S.Icon>
              <S.Name>이름 : 
              {props.dataBestBoards?.fetchBoardsOfTheBest[index].writer}</S.Name>
              <S.Like></S.Like>
            </S.BoardProfile>
            <S.BoardDetail>
              <S.Date>Date :
              {props.dataBestBoards?.fetchBoardsOfTheBest[index].createdAt.slice(0,10)}</S.Date>
              <S.LikeCount>
              {props.dataBestBoards?.fetchBoardsOfTheBest[index].likeCount}</S.LikeCount>
            </S.BoardDetail>
          </S.BestBoard>
            ))}
          
        </S.BestBoards>
      </S.WapperBest>
      <S.WrapperTable>
        <S.BoardSearch>
          <S.SearchTitle>
            <S.SearchImage></S.SearchImage>
            <S.SearchInput placeholder="제목을 검색해주세요" onChange={props.onChangeSearch}></S.SearchInput>
            </S.SearchTitle>
          <S.SearchDate placeholder="YYYY.MM.DD - YYYY.MM.DD"></S.SearchDate>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.BoardSearch>
        <S.TopRow>
          <S.TopColumnId>Number</S.TopColumnId>
          <S.TopColumnTitle>제목</S.TopColumnTitle>
          <S.TopColumn>작성자</S.TopColumn>
          <S.TopColumn>날짜</S.TopColumn>
          <S.TopColumnDelete>삭제</S.TopColumnDelete>
        </S.TopRow>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.Column>{10 - index}</S.Column>
            <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el :any) => (
                <S.TextToken key={uuidv4()} isMatch={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
            </S.ColumnTitle>
            <S.Column>{el.writer}</S.Column>
            <S.Column>{getDate(el.createdAt)}</S.Column>
            <S.DeleteButton id={el._id} onClick={props.onClickDelete}>뿡!
            </S.DeleteButton>
          </S.Row>
        ))}
        <S.Pagination>
        <S.PrevPage onClick={props.onClickPrevPage} disabled={props.prevActive}>&lt;이전 &gt;</S.PrevPage>
        {new Array(10).fill(1).map((_,index)=> 
        index + props.startPage <= props.lastPage &&(
            
            <S.PageNumber key={index + props.startPage} id = {String(index +props.startPage)} onClick={props.onClickPage} 
            buttoncolor={props.startPage + index === props.current}
            >{index + props.startPage}</S.PageNumber> 

        ))
        }
        <S.NextPage onClick={props.onClickNextPage} disabled={props.nextActive}>&lt;다음 &gt;</S.NextPage>
        </S.Pagination>
      </S.WrapperTable>
      <S.CreateButton onClick={props.GoCreate}>게시물생성 ✏️</S.CreateButton>
    </S.Body>
  );
}

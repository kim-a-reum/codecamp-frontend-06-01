import BoardsfetchUI from "./Boardsfetch.presenter";
import { FETCH_BOARDS, DELETE_BOARD,FETCH_BOARDS_COUNT, FETCH_BOARDS_BEST } from "./Boardsfetch.queries";
import { ChangeEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation } from "../../../commons/types/generated/types";
import { useState } from "react";
import _ from "lodash";

export default function Boardsfetch() {
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);
  const router = useRouter();
  
  const {data: dataBestBoards} = useQuery(FETCH_BOARDS_BEST);
  const { data,refetch } = useQuery(FETCH_BOARDS);
  
  const onClickDelete = (event: any) => {
    
    deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`boards/${event.target.id}`);
    }
  };
  const onClickFetch = (event: MouseEvent<HTMLDivElement>) => {
    if(event.target instanceof Element){
      router.push(`boards/${event.target.id}`);
    }   
  }

  //페이지네이션부분입니당

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const [prevActive, setprevActive] = useState(true);
  const [nextActive, setnextActive] = useState(false);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  
  const onClickPage = (event : any) =>{
  refetch({page:Number(event.target.id)}) 
  setCurrent(Number(event.target.id))}
  
  const onClickPrevPage = () => {
      if (startPage === 11){
          setprevActive(true)}
          setnextActive(false)
      setStartPage((prev) => prev - 10);
      refetch({ page: startPage - 10 });
      setCurrent(startPage - 10)
  };
  
  const onClickNextPage = () => {
      setprevActive(false)
      if (lastPage < startPage + 20 ){
          setnextActive(true)
      }
  
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
      setCurrent(startPage - 10)
      
  };

  const GoCreate =() =>{
    router.push('/../../../../boards/new')

  }
  console.log(dataBestBoards)

  //검색부분입니다

  const [keyword, setKeyword] = useState("")

  

  const getDebounce = _.debounce((data)=>{
            refetch({ search : data, page : 1})
            setKeyword(data);
        },200)

  const onChangeSearch = (event:ChangeEvent<HTMLInputElement>)=>{
            getDebounce(event.target.value)
            setKeyword(event.target.value)

        }

  return (
    <BoardsfetchUI
      onClickDelete={onClickDelete}
      onClickDetail={onClickDetail}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      onClickPage={onClickPage}
      onClickFetch={onClickFetch}
      data={data}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
      prevActive={prevActive}
      nextActive={nextActive}
      GoCreate={GoCreate}
      dataBestBoards={dataBestBoards}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      
    />
  );
}

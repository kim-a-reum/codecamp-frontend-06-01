import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
import { useState } from 'react'


const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
            fetchBoards(page:$page){
                _id
                writer
                title
                contents
            }    }
`
const FETCH_BOARDS_COUNT = gql`
 query fetchBoardsCount {
    fetchBoardsCount
  }
 `
const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`
const MyColumn = styled.div`
    width: 500px;

`
export const PageNumber = styled.span`
font-size: 50px;
width: 500px;
color: ${(props : any)=>(props.buttoncolor  ? "red" :"black")};
cursor: pointer;
`
const PageButton = styled.button`
    background-color: white;
    cursor: pointer;
    
`
export default function MapBoardPage(){

    
    const { data,refetch } = useQuery(FETCH_BOARDS)
    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
    const [startPage, setStartPage] = useState(1);
    const [current, setCurrent] = useState(1);
    const [prevActive, setprevActive] = useState(true);
    const [nextActive, setnextActive] = useState(false);
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
    
    const onClickPage = (event) =>{
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
    

    return(
    <>  
        {data?.fetchBoards.map((el)=>(
            <MyRow key={el._id}>
                
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))}
        <PageButton onClick={onClickPrevPage} disabled={prevActive}>이전페이지</PageButton>
        {new Array(10).fill(1).map((_,index)=> 
        index + startPage <= lastPage &&(
            
            <PageNumber key={index + startPage} id = {String(index +startPage)} onClick={onClickPage} 
            buttoncolor={startPage + index === current}
            >{index + startPage}&emsp;</PageNumber> 

        ))
        }
         <PageButton onClick={onClickNextPage} disabled={nextActive}>다음페이지</PageButton>

        
    </>
    )
    
}
    
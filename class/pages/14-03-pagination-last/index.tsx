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

            }
    }

`
const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount{
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

export default function MapBoardPage(){
    const [startPage,setStartPage] = useState(1)

    
        const { data,refetch } = useQuery(FETCH_BOARDS)
        const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
       const lastPage =  Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
        const onClickPage = (event) =>{
           
            refetch({page:Number(event.target.id)}) 
            

        }
        const onClickPrevPage = () =>{
            if (startPage ===1) return;
            setStartPage((prev) => prev -10)
            refetch({page : startPage -10 }) 
            
        }
        const onClickNextPage = () =>{
            // startPage + 10 <= lastPage 이거일때 실행해줘야하니까 실행할때를 적어주자
            if(!(startPage + 10 < lastPage)) return;
            setStartPage((prev) => prev +10)
            refetch({page:startPage + 10}) 
            


        }

    return(
    <>  
        {data?.fetchBoards.map((el)=>(
            <MyRow key={el._id}>
                
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))}
        <span onClick={onClickPrevPage}>이전페이지</span>
        {new Array(10).fill(1).map((_,index)=> 
        index + startPage <= lastPage && (
            
            <span key={index + startPage} id = {String(index + startPage)} onClick={onClickPage}>{index + startPage}</span> 

        ))
        }
        <span  onClick={onClickNextPage}>다음페이지</span>


        
    </>
    )
    
}
    
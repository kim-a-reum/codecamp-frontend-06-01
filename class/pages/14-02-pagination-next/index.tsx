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
        const onClickPage = (event) =>{
           
            refetch({page:Number(event.target.id)}) 
            

        }
        const onClickPrevPage = () =>{
            setStartPage((prev) => prev -10)
        }
        const onClickNextPage = () =>{
            setStartPage((prev) => prev +10)


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
        {new Array(10).fill(1).map((el,index)=> (
            
            <span key={index + startPage} id = {String(index + startPage)} onClick={onClickPage}>{index + startPage}</span> 

        ))
        }
        <span  onClick={onClickNextPage}>다음페이지</span>


        
    </>
    )
    
}
    
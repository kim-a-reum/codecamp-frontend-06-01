import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
import { useState } from 'react'
const FETCH_BOARDS = gql`

    query fetchBoards{
            fetchBoards{
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
    width: 25%;

`

export default function MapBoardPage(){
    const[myindex,setMyIndex] = useState(-1)

    
        const { data } = useQuery(FETCH_BOARDS)
        const onClickEdit = (event : any) => {
            setMyIndex(Number(event.target.id))

        }

// 함수가 다시 실행되면서 리렌더가 되니가 index고유값을 받아오기 땜시 한개씩밖에 수정을 못하는것
    return(
    <>  
        {data?.fetchBoards.map((el : any , index: any )=>(
            <div key={el._id}>
            {index !== myindex && (
            <MyRow>
               
                <MyColumn>{el._id}</MyColumn>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
                <button id={index} onClick={onClickEdit}>수정</button>
            </MyRow>
        )}
        {index === myindex && <div>수정하기 화면입니다 </div>}
        </div>
        ))}

        
    </>
    )
    
    
    }
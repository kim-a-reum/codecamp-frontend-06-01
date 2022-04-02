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
    const[myindex,setMyIndex] = useState([false,false,false,false,false,false,false,false,false,false])

    
        const { data } = useQuery(FETCH_BOARDS)
        const onClickEdit = (event : any) => {
            const aaa = myindex
            aaa[event.target.id] = true
            setMyIndex([...aaa])
            // 새로운 배열에 넣어준다는 의미를 꼭 알자 

        }


    return(
    <>  
        {data?.fetchBoards.map((el : any , index : any )=>(
            <div key={el._id}>
            {myindex[index] === false && (
            <MyRow>
                
                <MyColumn>{el._id}</MyColumn>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
                <button id={index} onClick={onClickEdit}>수정</button>
            </MyRow>
        )}
        {myindex[index] === true && <div>수정하기 화면입니다 </div>}
        </div>
        ))}

        
    </>
    )
    
    
    }
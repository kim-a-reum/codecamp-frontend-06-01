import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
const FETCH_BOARDS = gql`

    query fetchBoards{
            fetchBoards{
                number
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

    
        const { data } = useQuery(FETCH_BOARDS)


    return(
    <>  
        {data?.fetchBoards.map((el)=>(
            <MyRow key={el.number}>
                <MyColumn><input type= "checkbox"/></MyColumn>
                <MyColumn>{el.number}</MyColumn>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))}

    {/* // data?.fetchBoards가 FRUITS랑 똑같은 거임  */}
    {/* 구조만 잘 보면 헷갈릴거 없어 ! */}
    {/* index는 map함수가 실행시켜준 순서를 의미한다  */}
        
    </>
    )
    
    
    }
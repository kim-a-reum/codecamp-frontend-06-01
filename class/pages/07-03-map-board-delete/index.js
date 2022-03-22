import {useQuery,gql, useMutation} from '@apollo/client' 
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
            fetchBoards{
                number
                writer
                title
                contents}
    }

`
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number : $number){
            message
        }

    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    width: 25%;

`

export default function MapBoardPage(){

        const [deleteBoard] =useMutation(DELETE_BOARD)
        //deleteboard 요청하는 섹션을 만든거야 
        const { data } = useQuery(FETCH_BOARDS)
        const onClickDelete = (event) => {
            deleteBoard({
                variables:{number:Number(event.target.id)},
                refetchQueries:[{query:FETCH_BOARDS}]
                //refetchQueries 삭제하고 그리고 다시 패치해줘 하는 기능 
            })
        }

    return(
    <>  
        {data?.fetchBoards.map((el)=>(
                // <Fragment key={el.number}>
            <Row key={el.number}>
                {/* //key로 인덱스를 주면 안된다 삭제수정에 헷갈리기 때문 완전고유한번호를 주자  */}
                <Column><input type= "checkbox"/></Column>
                <Column>{el.number}</Column>
                <Column>{el.writer}</Column>
                <Column>{el.title} </Column>
                <Column>
                    <button id = {el.number} onClick={onClickDelete} >삭제</button>   
                    {/* //onClickDelete는 이벤트 핸들러 함수라고 불린다   */}
                </Column>
            </Row>
        ))}

    {/* // data?.fetchBoards가 FRUITS랑 똑같은 거임  */}
    {/* 구조만 잘 보면 헷갈릴거 없어 ! */}
    {/* index는 map함수가 실행시켜준 순서를 의미한다  */}
        
    </>
    // <></> 여기는 key를 쓸수가 없다 fragment는 키를 쓰는게 가능 
    )
    
    
    }
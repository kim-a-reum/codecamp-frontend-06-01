import {useQuery,gql, useMutation} from '@apollo/client' 
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
            fetchBoards{
                _id
                writer
                title
                contents
                createdAt
                }
    }

`
const DELETE_BOARD = gql`
    mutation deleteBoard($boardId:ID!){
        deleteBoard(boardId:$boardId)
        

    }
`
const Body = styled.div`
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
`
const Wrapper = styled.div`
    width: 900px;
    height: 260px;
    border: 1px solid pink;


`

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 3px solid black;
    border-bottom: 1px solid black;

`
const TopColumn = styled.div`
    width: 25%;


`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
    justify-content: space-around;

`

const Column = styled.div`
    width: 25%;


`



export default function MapBoardPage(){

        const [deleteBoard] =useMutation(DELETE_BOARD)

        const { data } = useQuery(FETCH_BOARDS)
        const onClickDelete = (event) => {
            deleteBoard({
                variables:{boardId:event.target.id},
                refetchQueries:[{query:FETCH_BOARDS}]

            })
            console.log(data)
        }

    return(
    <Body>  
        <Wrapper>  
            <TopRow>
                <TopColumn>ID</TopColumn>
                <TopColumn>제목</TopColumn>
                <TopColumn>작성자</TopColumn>
                <TopColumn>날짜</TopColumn>
            </TopRow>    
        {data?.fetchBoards.map((el)=>(
            <Row key={el._id}>                
                <Column>{String(el._id).slice(-4).toUpperCase()}</Column>
                <Column>{el.writer}</Column>
                <Column>{el.title} </Column>
                <Column>
                    <button id = {el._id} onClick={onClickDelete} >삭제</button>   
                </Column>
            </Row>))}
        </Wrapper>    

        
    </Body>

    )
    
    
    }
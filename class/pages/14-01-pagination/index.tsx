import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
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

    
        const { data,refetch } = useQuery(FETCH_BOARDS)
        const onClickPage = (event) =>{
           
            refetch({page:Number(event.target.id)}) 
            

        }


    return(
    <>  
        {data?.fetchBoards.map((el)=>(
            <MyRow key={el._id}>
                
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))}
        
        {new Array(10).fill(1).map((el,index)=> (
            
            <span key={index + 1} id = {String(index + 1)} onClick={onClickPage}>{index + 1}</span> 

        ))
        }


        
    </>
    )
    
}
    
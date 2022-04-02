import {useQuery,gql} from '@apollo/client' 
import BoardCommentItem from '../../src/components/units/15-board-comment'

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
// 이방법은 false를 여러번썼던것을 하지말고자, state를 분리해서 부모한테 올린것입니다 

export default function MapBoardPage(){

    
        const { data } = useQuery(FETCH_BOARDS)


    return(
    <>  
        {data?.fetchBoards.map((el : any , index : any )=>(
            <BoardCommentItem key={el._id} el={el}/>
        ))}

        
    </>
    )
    
    
    }
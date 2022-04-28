import { gql, useMutation, useQuery } from "@apollo/client"


const FETCH_BOARD = gql`
    query fetchBoard($boardId : ID!){
        fetchBoard(boardId : $boardId){
            _id
            likeCount

        }
    }

`
const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId:$boardId)
    }
`



export default function OptimisticUIPage(){
    const {data} = useQuery(FETCH_BOARD,
        { variables : {boardId : "6269ecd0a8255b002988d632"}})


    const [likeBoard] = useMutation(LIKE_BOARD)

    const onClickOptimisticUI = ()=> {
        likeBoard({ variables : { boardId: "6269ecd0a8255b002988d632" },
       
        optimisticResponse:{
            likeBoard: (data?.fetchBoard.likeCount || 0) + 1 
        },

        update(cache,{data}){
            cache.writeQuery({
                query: FETCH_BOARD, // 이 api를 내가 직접 바꿔치기 한다 !
                variables:{ boardId: "6269ecd0a8255b002988d632" }, // 이 정보로 조작할건데, 
                data: {
                    fetchBoard:{
                        _id: "6269ecd0a8255b002988d632",
                        __typename: "Board",
                        likeCount : data.likeBoard, 

                    }
                }

            })

        }
    // refetchQueries:[{
    //     query: FETCH_BOARD,
    //     variables: {boardId :"6269ecd0a8255b002988d632" }
    // }]
})
    }
    
    
    return(
        <>
        
        <div>
            <h1>Optimistic UI</h1>
            <div> 현재카운트(좋아요):{data?.fetchBoard.likeCount}</div>
            <button onClick={onClickOptimisticUI}>좋아요 올리기 !!</button>
        </div>
        </>
    )
}

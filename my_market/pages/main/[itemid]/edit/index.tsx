//게시글 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CreateBoardPage from "../../../../src/components/boards/CreateBoard/createboard.container";

const FETCH_BOARD = gql`
    query FetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
            youtubeUrl
            deletedAt
            images


        }   }


`

export default function BoardsFetchPage(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARD,
        {variables : { boardId:router.query.boardid} });



    return(
<CreateBoardPage isEdit = {true} data={data} />
    )


}
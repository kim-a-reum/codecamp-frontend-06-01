//게시글 수정 

import CreateBoardPage from "../../../../src/components/board/Createboard/CreateBoard.container";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'




export const FETCH_BOARD = gql`
    query FetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
            youtubeUrl
            deletedAt


        }   }


`

export default function OpenEditBoard(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARD,
        {variables : { boardId:router.query.boardId} });

    return<CreateBoardPage isEdit = {true} data={data}/>


}
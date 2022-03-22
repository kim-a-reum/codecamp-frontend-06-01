import { route } from "next/dist/server/router";
import { Router, useRouter } from "next/router";
import { useQuery } from '@apollo/client'
import FetchBoardUI from "./FetchBoard.presenter";
import { FETCH_BOARD } from "./FetchBoard.queries";

export default function FetchBoardPage(){
    const router = useRouter()
    console.log(router)
    console.log(router.query.number)
    const { data } = useQuery(FETCH_BOARD,
                {variables : { boardId: router.query.boardId} });


    return ( <FetchBoardUI
        data = {data}
        />


    )                
    }
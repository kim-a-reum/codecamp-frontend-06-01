import { route } from "next/dist/server/router";
import { Router, useRouter } from "next/router";
import { useMutation, useQuery } from '@apollo/client'
import FetchBoardUI from "./FetchBoard.presenter";
import { FETCH_BOARD } from "./FetchBoard.queries";
import { DELETE_BOARD } from "./FetchBoard.queries";

export default function FetchBoardPage(){
    const router = useRouter()
    console.log(router)
    console.log(router.query.number)
    const { data } = useQuery(FETCH_BOARD,
                {variables : { boardId:String(router.query.boardId)} });
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const onClickDelete = (event) => {
        deleteBoard({
            variables :{boardId:String(data.fetchBoard._id)}
            //id 불러오는 값이 매번 어려운데, 생각을 잘하자. 넘겨받은 게시물조회의 _id도 되는거고, 쿼리에서 받아온 id도 되는거고... 그리고 onClick은 event 타켓 벨류 없기 때문에 써주는게 아니다.
        })
        alert ("게시물 삭제 완료! 목록 페이지로 넘어갑니다 !")
        router.push(`/boards/boards`)
    }

    const OnClickEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`)

    }


    return ( <FetchBoardUI
        data = {data}
        onClickDelete = {onClickDelete}
        OnClickEdit= {OnClickEdit}
        
        />


    )                
    }
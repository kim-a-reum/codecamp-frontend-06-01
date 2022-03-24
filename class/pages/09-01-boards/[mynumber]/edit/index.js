//수정하기 페이지 
// 수정은 상세보기 안의 폴더이기 때문에 한번 폴더 더 나가서 받아와야함 
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/09-board-write/BoardWrite.comtainer";
import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }

`





export default function BoardEditPage()
{ 
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,
    {variables : {number : Number(router.query.mynumber)}
})

    return <BoardWrite isEdit = {true} data = {data}/>


}
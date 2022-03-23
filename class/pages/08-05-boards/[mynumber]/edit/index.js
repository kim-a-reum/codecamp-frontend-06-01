//수정하기 페이지 수정은 상세보기 안의 폴더이기 때문에 한번 폴더 더 나가서 받아와야함 

import BoardWrite from "../../../../src/components/units/board/08-board-write/BoardWrite.comtainer";


export default function BoardEditPage()
{
    return <BoardWrite isEdit = {true} />


}
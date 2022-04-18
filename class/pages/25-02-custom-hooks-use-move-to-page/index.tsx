import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage"


export default function CustomHooksUseMoveToPage(){
    const {onClickMoveToPage} = useMoveToPage()
    // 페이지 이동할때는 이렇게 ㄴ내가 만들어놓은 커스텀 훅만 불러오면 된다 !
    return (
        <div>
            <button onClick ={onClickMoveToPage("/board")}>게시판으로 이동</button>
            <button onClick ={onClickMoveToPage("/market")}>마켓으로 이동</button>
            <button onClick ={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
        </div>
    )
}
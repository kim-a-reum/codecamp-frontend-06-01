import { useRouter } from "next/router"
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";


export function useMoveToPage(){
    const router = useRouter()
    const [visitedPage,setVisitedPage] = useRecoilState(visitedPageState)

    const onClickMoveToPage =(path)=> () =>{
        setVisitedPage(path)
        console.log(path)
        // 지금 있는 페이지에다가 path를 저장하고 이동! 
        // router.push(path)
    };

    return {
        visitedPage,
        onClickMoveToPage,
    }
}
import BoardFetchUI from "./BoardFetch.presenter";
import { useRouter
 } from "next/router";
export default function BoardFetch(){

const router = useRouter();

const onClickMove1 = () => {

    router.push("/06-dynamic-board-fetched/83011")
}
const onClickMove2 = () => {
    router.push("/06-dynamic-board-fetched/83012")
}
const onClickMove3 = () => {
    router.push("/06-dynamic-board-fetched/83013")
}


return ( 
    <BoardFetchUI
    onClickMove1={onClickMove1}
    onClickMove2={onClickMove2}
    onClickMove3={onClickMove3}/>

)

}
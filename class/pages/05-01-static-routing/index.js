import { useRouter} from 'next/router'

export default function StaticRoutingPage(){
    const router = useRouter()
    const onClickMove = () => {
        router.push("/05-02-static-routed")
        // 이 주소는 localhost 3000이 생략된거다 

    }


return(
        <button onClick={onClickMove}>페이지 이동하기!!</button>

)


}
import { useRouter } from "next/router"
import { useEffect} from "react"

export function useAuth(){
    // 안에 use들이 쓰이고 있겠구나~ 해서 use로 이름 붙여조야댐!
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용가능합니다 !! ")
            router.push("./23-04-login-check")
        }

    },[])


}
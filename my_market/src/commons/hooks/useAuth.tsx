import { useRouter } from "next/router";
import { useEffect } from "react";
import { ModalError } from "../../components/utility";

export function useAuth(){
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            ModalError({contents:"로그인 후 이용가능합니다 ! "})
        router.push("./main")
        }
    },[])
}
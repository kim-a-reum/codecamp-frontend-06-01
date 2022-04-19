
import { useRouter } from "next/router"
import { ComponentType, useEffect } from "react"

// prettier-ignore
export const withAuth = (Component: ComponentType) =><P extends{}>(props : P): [ComponentType,P]=> { 
    
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용가능합니다 !! ")
            router.push("./23-04-login-check")
        }

    },[])

    return <Component {...props}/>
}
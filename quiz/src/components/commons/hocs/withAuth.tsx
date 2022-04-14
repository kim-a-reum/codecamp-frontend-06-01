
// @ts-ignore
import { useRouter } from "next/router"
import { useEffect } from "react"



export const withAuth = (Component) => (props)=> { 
    
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용가능합니다 !! ")
            router.push("./23-01-hoc-login")
        }

    },[])

    return <Component {...props}/>
}
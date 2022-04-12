import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"


const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            email
            name
        }
    }

`
export default function LoginSuccessPage(){


    const router = useRouter()
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const [accessToken] = useRecoilState(accessTokenState)
    
    useEffect(()=>{
        datacheck()
        },[])



    const datacheck =()=>{
        if(accessToken === "" || data === undefined){
        alert("로그인을 제대로 하세요")     
        router.push('./22-01-login')
        }}
    


    console.log(data)
    return (
        <>
        <div>{data?.fetchUserLoggedIn.name}님 어서오세욧 ! </div>
        <img src="../picture/루피요리사.jpeg"></img>
        </>
    )
}
import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState} from "../../commons/store";
import { Modalsuccess} from "../utility";
import MyLoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import 'antd/dist/antd.css'


export default function MyLoginPage(){
    const router = useRouter()
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const [loginUser] = useMutation(LOGIN_USER)
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const client = useApolloClient()

 
    const[mailErr,setMailErr]=useState("")
    const[passErr,setPassErr]=useState("")

    function onChangeEmail(event : ChangeEvent<HTMLInputElement>){
        setMail(event.target.value)
        
    }

    function onChangePass(event : ChangeEvent<HTMLInputElement>){
        setPass(event.target.value)
        
    }
    

    const onClickMain = ()=>{
        router.push('/main')
    }
    const onClickLogin = async()=>{
    if(!mail.includes("@")){
        setMailErr("이메일 아이디를 @까지 정확하게 입력해주세요.")
    } 
    if(pass === ""){
        setPassErr("영문+숫자 조합 8-16자리의 비밀번호를 입력해주세요.")
    }
    try{
        //로그인 부분입니다 
        const result =  await loginUser({
            variables:{
                email: mail,
                password: pass
            }
        })
        const accessToken = result.data.loginUser.accessToken

        // localStorage.setItem("accessToken",accessToken)
        //유저정보 받아오는 부분입니다
        const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context:{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }
        })
        setAccessToken(accessToken)
        // localStorage.setItem("userInfo",JSON.stringify(userInfo))
        // localStorage.setItem("accessToken",accessToken)

        Modalsuccess({content:"로그인성공"})
        router.push('./')
        
    }catch(error){
    console.log(error)
    }
        
    }
    
    return(

        <MyLoginPageUI
        onChangeEmail={onChangeEmail}
        onChangePass={onChangePass}
        onClickMain={onClickMain}
        onClickLogin={onClickLogin}
        mailErr={mailErr}
        passErr={passErr}
        
        />
  
        ) 


}

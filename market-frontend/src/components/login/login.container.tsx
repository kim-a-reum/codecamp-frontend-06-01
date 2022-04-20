import { useApolloClient, useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../commons/store";
import { ModalError, Modalsuccess } from "../utility";
import MyLoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";



export default function MyLoginPage(){
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const [,setUserInfo] = useRecoilState(userInfoState)
    const router = useRouter()
    const client = useApolloClient()
    const [loginUser] = useMutation(LOGIN_USER)

    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")



    const[mailErr,setMailErr]=useState("")
    const[passErr,setPassErr]=useState("")

    function onChangeEmail(event : ChangeEvent<HTMLInputElement>){
        setMail(event.target.value)
        
    }
    function onChangePass(event : ChangeEvent<HTMLInputElement>){
        setPass(event.target.value)
        
    }
    
    const onClickMain = ()=>{
        router.push('./')
    }
    
    const onClickLogin = async()=>{
    if(mail ==="" ||pass === ""){
        ModalError({content:"이메일, 비밀번호를 모두 입력해주세요 "})
    }
    if(!mail.includes("@")){
        setMailErr("이메일 형식이 올바르지 않습니다")
    }
    try{
        const result =  await loginUser({
            variables:{
                email: mail,
                password: pass,
                
            }
        })
        //토큰 localstorage에 저장
        const accessToken = result.data.loginUser.accessToken
        setAccessToken(accessToken)
        //토큰 가지고 유저정보 받아오기 
        const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context:{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }
        })
        const userInfo = resultUserInfo.data.fetchUserLoggedIn
        console.log(userInfo)
        // 로컬스토리지에 둘 다 저장 
        localStorage.setItem("accessToken",accessToken)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        Modalsuccess({content: "로그인에 성공했습니다!"})
        router.push('./')
    } 
    catch (error){
        ModalError({content: "이메일 혹은 비밀번호를 확인해주세요 "})
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

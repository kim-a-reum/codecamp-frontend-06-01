import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../commons/store";
import { ModalError, Modalsuccess} from "../utility";
import MyLoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import 'antd/dist/antd.css'


export default function MyLoginPage(){
    const router = useRouter()
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const [,setUserInfo] = useRecoilState(userInfoState)
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
    if(mail ==="" || pass === ""){
        Modalsuccess({content:"이메일,비밀번호를 모두 입력해주세요 "})
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
        const userInfo = resultUserInfo.data.fetchUserLoggedIn
        setUserInfo(userInfo)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        console.log(userInfo)
        Modalsuccess({content:"로그인성공"})
        router.push('./main')
        
    }catch(error){
        ModalError({contents:"무언가가 잘못되었다"})
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

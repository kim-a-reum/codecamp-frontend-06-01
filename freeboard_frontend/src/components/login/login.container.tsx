import { useMutation } from "@apollo/client";
import { access } from "fs";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";
import { ModalError, Modalsuccess } from "../utility";
import MyLoginPageUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";



export default function MyLoginPage(){
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const router = useRouter()
    const [loginUser] = useMutation(LOGIN_USER)

    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[name,setName]=useState("")


    const[mailErr,setMailErr]=useState("")
    const[nameErr,setNameErr]=useState("")
    const[passErr,setPassErr]=useState("")

    function onChangeEmail(event : ChangeEvent<HTMLInputElement>){
        setMail(event.target.value)
        
    }
    function onChangeName(event : ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
        
    }
    function onChangePass(event : ChangeEvent<HTMLInputElement>){
        setPass(event.target.value)
        
    }
    
    const onClickMain = ()=>{
        router.push('/boards')
    }
    
    const onClickLogin = async()=>{
    if(mail ==="" ||pass === ""){
        ModalError({content:"이메일, 이름, 비밀번호를 모두 입력해주세요 "})
    }
    if(!mail.includes("@")){
        setMailErr("이메일 형식이 올바르지 않습니디ㅏ")
    }
    const result =  await loginUser({
        variables:{
            email: mail,
            password: pass,

        }
    })
    const accessToken = result.data.loginUser.accessToken
    console.log(accessToken)
    localStorage.setItem("accessToken",accessToken)
    setAccessToken(accessToken)
    Modalsuccess({content: "로그인에 성공했습니다!"})
    router.push('./boards')



    }

    return(

        <MyLoginPageUI
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangePass={onChangePass}
        onClickMain={onClickMain}
        onClickLogin={onClickLogin}
        mailErr={mailErr}
        passErr={passErr}
        nameErr={nameErr}
        
        />
  
        ) 


}

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUserArgs } from "../../commons/types/generated/types";
import { ModalError, Modalsuccess, ModalWarning } from "../utility";
import MyLoginPageUI from "./login.presenter";



export default function MyLoginPage(){
    const router = useRouter()

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
        router.push('/main')
    }
    const onClickLogin = ()=>{
    if(mail ==="" || pass === ""){
        Modalsuccess({content:"이메일,비밀번호를 모두 입력해주세요 "})
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

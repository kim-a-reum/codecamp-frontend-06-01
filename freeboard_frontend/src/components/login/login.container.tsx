import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUserArgs } from "../../commons/types/generated/types";
import { ModalError } from "../utility";
import MyLoginPageUI from "./login.presenter";



export default function MyLoginPage(){
    const router = useRouter()

    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[name,setName]=useState("")

    // const[inputs,setInputs]=useState({
    //     name:"",
    //     mail:"",
    //     pass:"",
    //     pass2:""
    // })

 
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
    const onClickLogin = ()=>{
    if(mail ==="" || name === "" || pass === ""){
        ModalError({content:"이메일, 이름, 비밀번호를 모두 입력해주세요 "})
    }


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

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUserArgs } from "../../commons/types/generated/types";
import { ModalError } from "../utility";
import MySignUpPageUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function MySignUpPage(){
    const router = useRouter()
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[pass2,setPass2]=useState("")
    const[name,setName]=useState("")

    // const[inputs,setInputs]=useState({
    //     name:"",
    //     mail:"",
    //     pass:"",
    //     pass2:""
    // })

    const [createUser] = useMutation<Pick<IMutation,"createUser">,IMutationCreateUserArgs>(CREATE_USER);

    const[mailErr,setMailErr]=useState("")
    const[nameErr,setNameErr]=useState("")
    const[passErr,setPassErr]=useState("")
    const[pass2Err,setPass2Err]=useState("")

    function onChangeEmail(event : ChangeEvent<HTMLInputElement>){
        setMail(event.target.value)
        if (event.target.value.includes("@") === true){
            setMailErr("")
        }
    }
    function onChangeName(event : ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
        
    }
    function onChangePass(event : ChangeEvent<HTMLInputElement>){
        setPass(event.target.value)
        
    }
    function onChangePass2(event : ChangeEvent<HTMLInputElement>){
        setPass2(event.target.value)
        
    }
    
    const PutOk = async()=>{
    if((mail.includes("@")) === false){
        setMailErr ("이메일형식이 올바르지 않습니다")
        return
    }
    if(name === ""){
        setNameErr("이름을 입력해주세요")
        return
    }
    if(pass === ""){
        setPassErr ("비밀번호를 입력하세요.")
        return
    } 
    if(pass !== pass2){
        setPass2Err ("비밀번호가 일치하지 않습니다")
        return
    } 
    if ((mail.includes("@")) !== false && pass !== "" && pass == pass2) {
       try{
        console.log("여기까진오나?")
        const result = await createUser({
            variables:{
                createUserInput:{
                    email : mail,
                    password : pass,
                    name: name
                }
            }
        }) 
        console.log(result)
        alert("회원가입을 축하합니다.")
       } 
        catch (error){
            ModalError({content:"이미 존재하는 이메일일수도 있고, 비밀번호를 확인하셔야해요"})
        }
    } }

    const onClickMain = ()=>{
        router.push('/boards')
    }

    return(
<>
        <MySignUpPageUI
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangePass={onChangePass}
        onChangePass2={onChangePass2}
        onClickMain={onClickMain}
        PutOk={PutOk}
        mailErr={mailErr}
        passErr={passErr}
        pass2Err={pass2Err}
        nameErr={nameErr}
        
        />
        </>
        ) 


}
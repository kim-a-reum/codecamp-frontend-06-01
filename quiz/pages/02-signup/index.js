import {useState} from "react"

import {Body,Wrapper,EmailBox,EmailError,NameBox,NameError,PassWordBox,PassWordError,
    PassWordBox2,PassWordError2, FinshButton} from '../../../styles/emotion'


export default function SignUpPage(){
    

    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[pass2,setPass2]=useState("")

    const[mailErr,setMailErr]=useState("")
    const[passErr,setPassErr]=useState("")
    const[pass2Err,setPass2Err]=useState("")

    function onChangeEmail(event){
        setMail(event.target.value)
        if (event.target.value.includes("@") === true){
            setMailErr("")
        }
    }
    function onChangePass(event){
        setPass(event.target.value)
        if (setPass !== "") {
            setPassErr("")
        }
    }
    function onChangePass2(event){
        setPass2(event.target.value)
        if (setPass2 !== "") {
            setPass2Err("")
        }
    }
    
    function PutOk(){
    if((mail.includes("@")) === false){
        setMailErr ("이메일형식이 틀렸습니다.")
    }
    if(pass === ""){
        
        setPassErr ("비밀번호를 입력하세요.")
    } 
    if(pass !== pass2){
    
        setPass2Err ("비밀번호를 확인하세요.")
    } 
    if ((mail.includes("@")) !== false && pass !== "" && pass == pass2) {
        
        alert("회원가입을 축하합니다.")
    } 
}
    // 비효율의 끝판왕 거지같은 함수와 조건문이지만, 그래도 시도한것에 의의를 두는 나의 오류가득 코드 ! 
    // function PutOk(){
    //     if((mail.includes("@")) === false){
    //         setMailErr ("이메일형식이 틀렸습니다.")
    // }   else {
    //     setMailErr ("")
    // }
        
    // function PutOk1(){
        
    //     if(pass !== pass2){
        
    //         setPassErr ("비밀번호를 확인하세요.")
    //         setPass2Err ("비밀번호를 확인하세요.")
    //     }   
    //         if(pass == pass2){
    
    //         setPassErr ("")
    //         setPass2Err("")
            
    //     }
    // }

    // function PutOk2(){

    //     if(pass == pass2 && (mail.includes("@"))=== true ){
    //         alert("회원가입을 축하합니다.")
    //     }
    // }
    
    // }

        return(
    <Body>

    <Wrapper>
        
        <EmailBox type={"text"} placeholder="이메일을 입력해 주세요." onChange={onChangeEmail}/> 

        <EmailError>{mailErr}</EmailError>

        <NameBox type={"text"} placeholder="이름을 입력해 주세요."/>

        <NameError></NameError>

        <PassWordBox type={"password"} placeholder="비밀번호를 입력해 주세요." onChange={onChangePass}/>

        <PassWordError>{passErr}</PassWordError>

        <PassWordBox2 type={"password"} placeholder="비밀번호를 다시 입력해 주세요."onChange={onChangePass2}/>
        
        <PassWordError2>{pass2Err}</PassWordError2>

        <FinshButton onClick={PutOk}>가입하기</FinshButton>
        
    </Wrapper>
    </Body>        

            




        )
}
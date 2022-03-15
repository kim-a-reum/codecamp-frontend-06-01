import {useState} from "react"

import {Body,Wrapper,EmailBox,EmailError,NameBox,NameError,PassWordBox,PassWordError,
    PassWordBox2,PassWordError2, FinshButton} from '../../../styles/emotion'


export default function SignUpPage(){
    
// 1번 부분 이메일, 비밀번호 값이 사용자에 의해 입력이 되면 그 값으로 바꿔주는 state문과 함수 작성
// 2번 부분 버튼이 눌리면 아무것도 표시하지 않다가 
// 3번 부분 조건에 의해 에러구문이 표시되는 조건 함수 작성 
//     


// 1번 부분 
    const[mail,setMail]=useState("")
    const[pass,setPass]=useState("")
    const[pass2,setPass2]=useState("")

    function onChangeEmail(event){
        setMail(event.target.value)
    }
    function onChangePass(event){
        setPass(event.target.value)
    }
    function onChangePass2(event){
        setPass2(event.target.value)
    }

//2번 부분 원래값을 에러구문이 뜨지않는 "" 빈값으로 설정하고 , 
// 바꿔주는값을 에러가 있으면 (조건문)을 밑에 함수로 작성 
    const[mailErr,setMailErr]=useState("")
    const[passErr,setPassErr]=useState("")
    const[pass2Err,setPass2Err]=useState("")
    
    function PutOk(){
        if((mail.includes("@")) === false){
        setMailErr ("이메일형식이 틀렸습니다.")
    } else if(pass === ""){
        setMailErr ("")
        setPassErr ("비밀번호를 입력하세요.")
    }  else if(pass !== pass2){
        setMailErr ("")
        setPassErr ("")
        setPass2Err ("비밀번호를 확인하세요.")
    }  else {
        setPass2Err ("")
        alert("회원가입을 축하합니다.")
    } 
}
    
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
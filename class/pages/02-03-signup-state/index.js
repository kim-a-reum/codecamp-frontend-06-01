import { useState } from 'react'



export default function SignupStatePage(){


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onChangeEmail(event){
        // event.target =>태그전체 <input type = "text" ...
        // event.target.value => 우리가 입력한 값 a@a.com
        setEmail(event.target.value)
        
    }
    function onChangePassword(event){
        setPassword(event.target.value)
        
        
    }
    // 함수를 밑에 return존에서 바인딩한다 
    function onClickSignup(){
        // 진짜 포장이 잘 되었는지 확인해보기 
        console.log(email)
        console.log(password)

        if(email.includes("@") === false){
            alert("이메일이 올바르지 않습니다!")
        } else {
            alert("회원가입을 축하합니다 ")
        }

    }
    
    return(
        <div>
            이메일: <input type = "text" onChange={ onChangeEmail}/><br/>
            {/* 이메일에 어떤값이 입력이 되면 함수가 실행이 되도록 a만하면 포장, a@되면 그거로 다시 포장..계속 입력할때마다 포장됨 */}
            비밀번호:<input type = "password" onChange={ onChangePassword}/><br/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>



    )



}

// 이메일 에러처리 
// import { useState } from 'react'

// export default function SignupStatePage(){
//     const [email, setEmail] = useState("")
//     const [emailError, setEmailError] = useState("")

//     const [password, setPassword] = useState("")

//     function onChangeEmail(event){
//         console.log(event.target.value)
//         // event.target       => 태그전체 <input type="text" ...
//         // event.target.value => 우리가 입력한 값 a@a.com
//         setEmail(event.target.value)
//     }

//     function onChangePassword(event){
//         setPassword(event.target.value)
//     }

//     function onClickSignup(){
//         // 진짜 포장이 잘 됐는지 확인해보기
//         console.log(email)
//         console.log(password)

//         if(email.includes("@") === false){
//             // alert("이메일이 올바르지 않습니다!! @가 없음!!")
//             setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
//         } else {
//             alert("회원가입을 축하합니다!!!")
//         }
//     }

//     return (
//         <div>
//             이메일: <input type="text" onChange={onChangeEmail} /><br />
//             <div>{emailError}</div>
//             비밀번호: <input type="password" onChange={onChangePassword} /><br />
//             <button onClick={onClickSignup}>회원가입</button>
//         </div>
//     )

// }
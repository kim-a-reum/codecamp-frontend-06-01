import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"


const LOGIN_USER = gql`
    mutation loginUser($password: String!, $email: String!){
        loginUser(email:$email,password:$password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const router = useRouter()
    const [loginUser] = useMutation(LOGIN_USER)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onChangeEmail = (event : ChangeEvent<HTMLInputElement>) =>{
        setEmail(event?.target.value)
    }
    const onChangePassword = (event : ChangeEvent<HTMLInputElement>)=>{
        setPassword(event?.target.value)
    }
    const onClickLogin = async ()=>{
      try{

          const result =  await loginUser({
              variables:{
                  email:email,
                  password:password
                }
            })
            const accessToken = result.data.loginUser.accessToken
            console.log(accessToken)
            setAccessToken(accessToken)
            alert("로그인성공")
            router.push('./22-02-login-success')
        } catch (error){
            alert("아이디와 비밀번호를 확인해주세요")
            router.push('./22-01-login')
        } 

    }


    return(
        <>
        이메일 : <input type= "text" onChange={onChangeEmail}/><br/>
        비밀번호 : <input type= "password"onChange={onChangePassword}/><br/>
        <button onClick={onClickLogin}>로그인하기</button>
        
        </>
    )
}
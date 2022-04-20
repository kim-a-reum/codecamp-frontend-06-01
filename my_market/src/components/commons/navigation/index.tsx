import styled from "@emotion/styled"
import { useRouter } from "next/router"

const Navigation = styled.div`
width: 1500px;
height: 50px;
margin-top: 30px;
background-color: #d392d3;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding-right: 100px;
`
const Login = styled.button`
width: 100px;
height: 40px;
background-color: white;
border: none;
font-size: 20px;
margin-right: 10px;
cursor: pointer;
:hover{
  color : indianred;
}
`
const Signup = styled.button`
width: 100px;
height: 40px;
background-color: white;
border: none;
font-size: 20px;
cursor: pointer;
:hover{
  color : indianred;
}

`



export default function NavigationPage(){
    const router = useRouter()

    const onClickLogin = ()=>{
     router.push('/main/login')
    }

    return (
        <div>
        <Navigation>
        <Login onClick={onClickLogin}>로그인하기</Login>
        <Signup>회원가입</Signup>
        </Navigation>
        </div>

    )
}
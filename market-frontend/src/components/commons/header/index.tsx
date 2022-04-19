import styled from "@emotion/styled";
import { Router, useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: #f59e9e;
  background-position: auto;
  height: 110px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  line-height: 50px;
  padding-left: 70px;
  
`;
const LeftImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('../../../picture/루피드루와.png');
  background-size: cover;
`
const LeftTitle = styled.div`
  width: 500px;
  height: 100px; 
  display: flex;
  flex-direction: column;
`
const CenterTitle = styled.div`
width: 365px;
font-size: 50px;
font-weight: 900;
background-color: aliceblue;
border-radius: 50px;
cursor: pointer;

`
const CenterSubTitle = styled.div`
  font-size: 25px;
  margin-top: 3px;
  height: 40px;
  background-color: #f59e9e;
  
  `
  const RightLogin = styled.div`
    width: 200px;
    height: 100px;
    margin-left: 500px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;
    padding-bottom: 30px;

  `

const LoginBox = styled.button`
  width: 50px;
  height: 30px;
  font-size: 20px;
  color: white;
  line-height: 3px;
  margin-right: 20px;
  border: none;
  background-color: indianred;
  border-radius: 12px;
  cursor: pointer;
`
const SignupBox = styled.button`
  width: 80px;
  height: 30px;
  font-size: 20px;
  color: white;
  line-height: 3px;
  border: none;
  background-color: indianred;
  border-radius: 12px;
  cursor: pointer;
  
`
export default function LayoutHeader() {
  const router = useRouter()
  const goBoard = () =>{
    router.push('/')
  }
  const goSignup = () =>{
    router.push('/signup')
  }
  const goLogin = () =>{
    router.push('/login')
  }
  return (
    <>
  <Wrapper> 
      <LeftImage></LeftImage>
      <LeftTitle>
          <CenterTitle onClick={goBoard}> 🎀  루피의 고민마켓 🎀  </CenterTitle>
          <CenterSubTitle>
          오늘의 고민을 공유하고 걱정을 나누어 반이되는 곳입니다 💜
          </CenterSubTitle>
      </LeftTitle>
      <RightLogin>
        <LoginBox onClick={goLogin}>Login</LoginBox>
        <SignupBox onClick={goSignup}>회원가입</SignupBox>
      </RightLogin>
  </Wrapper>
    </>
  )
}

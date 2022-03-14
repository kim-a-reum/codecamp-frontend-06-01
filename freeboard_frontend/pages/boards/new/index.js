import {Wrapper,Body}from '../../../styles/emotion'



export default function AAAPage() {

    // 여기는 자바스크립트 쓰는곳 


  return (

    // HTML 쓰는곳 
    <Body>
      <Wrapper>


        <MyEmail>
        아이디
        <input type = "text"/>
        </MyEmail>
      
        <MyPassword>
        비밀번호
        <input type = "password"/>
        </MyPassword>
      
      
      </Wrapper>
      
    </Body>
  )
}
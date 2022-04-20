import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Wrapper = styled.div`
  background-color: #a0b097;
  height: 45px;
  width: 1500px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 100px ;
  align-items: center;
  
`;

const Box = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
`

const FreeBoard = styled.button`  
  width: 120px;
  background-color: #188d77;
  border: none;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: #155d1f;
}

`;

 


const FreeMarket= styled.div`
  
  width: 100px;
  :hover{
  font-weight: 900;
  color: #155d1f;
  
}
 
`;

const MyPage = styled.div`
  
  width: 100px;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: #155d1f;
  
}
 
`;


export default function LayoutNavigation() {
  const router =useRouter()
  const [islogged,setIslogged]=useState(false)

  useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo")
    if(userInfo){
      setIslogged(true)
    }
  },[])

  const goLogin = () => {
      router.push('/login');
    
  };

 
  return (
<>
    <Wrapper>
      <Box>
        <FreeMarket>중고마켓</FreeMarket>
          
      </Box>
      <Box>
        <MyPage>마이페이지 </MyPage>
      </Box>
      <Box>
        {islogged ? <div>님 환영합니다</div> : 
        <FreeBoard onClick = {goLogin}>
        로그인하기</FreeBoard>
        }
      </Box>

      
      
      
    </Wrapper>
</>
    )
     
}

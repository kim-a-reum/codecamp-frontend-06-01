import styled from "@emotion/styled";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  background-color: #f5e0ff;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const FreeBoard = styled.div`
  
  width: 100px;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
  
}
 

`;
const FreeMarket= styled.div`
  
  padding-right: 25px;
`;
const MyPage = styled.div`
  
  
`;


export default function LayoutNavigation() {
  const router =useRouter()
  

  const goboard = () => {
      router.push('/boards');
    
  };

  
  return (
<>
    <Wrapper>
      <FreeBoard onClick = {goboard}>자유게시판</FreeBoard>
      <FreeMarket>중고마켓</FreeMarket>
      <MyPage>마이페이지</MyPage>
    </Wrapper>
</>
    )
     
}

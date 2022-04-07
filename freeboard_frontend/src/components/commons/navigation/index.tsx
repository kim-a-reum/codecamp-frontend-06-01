import styled from "@emotion/styled";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  background-color: #f5e0ff;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 100px ;
  align-items: center;
  
`;
const FreeBoard = styled.div`  
  width: 100px;
  height: 150px;
  background-color: aliceblue;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
}

`;
const RandomFood = styled.div`
  width: 100px;
  height: 150px;
  background-color: aliceblue;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 

`;
const FreeMarket= styled.div`
  
  width: 100px;
  height: 150px;
  background-color: aliceblue;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 
`;
const GominBoard= styled.div`
  
  width: 100px;
  height: 150px;
  background-color: aliceblue;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 
`;
const MyPage = styled.div`
  
  width: 100px;
  height: 150px;
  background-color: aliceblue;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 
`;


export default function LayoutNavigation() {
  const router =useRouter()
  

  const goBoard = () => {
      router.push('/boards');
    
  };
  const goFood = () => {
    router.push('/openapifoods');
  
};
const goFirebase = () => {
  router.push('/myfirebase');

};

  
  return (
<>
    <Wrapper>
      <RandomFood onClick={goFood}>루피의 Today 추천메뉴</RandomFood>
      <GominBoard onClick = {goFirebase}>gomin 게시판</GominBoard>
      <FreeBoard onClick = {goBoard}>자유게시판</FreeBoard>
      <FreeMarket>중고마켓</FreeMarket>
      <MyPage>마이페이지</MyPage>
    </Wrapper>
</>
    )
     
}

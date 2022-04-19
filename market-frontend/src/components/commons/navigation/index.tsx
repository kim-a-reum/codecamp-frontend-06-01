import styled from "@emotion/styled";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  background-color: #f5e0ff;
  height: 145px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 100px ;
  align-items: center;
  
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
`
const Detail = styled.div`
  width: 150px;
  font-size: 20px;
  text-align: center;
  line-height: 16px;

`
const FreeBoard = styled.div`  
  width: 100px;
  height: 100px;
  background-image: url('../../../../picture/루피하이.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
}

`;
const RandomFood = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('../../../../picture/루피돼지.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 

`;
const FreeMarket= styled.div`
  
  width: 100px;
  height: 100px;
  background-image: url('../../../../picture/루피느낌표.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 
`;
const GominBoard= styled.div`
  
  width: 100px;
  height: 100px;
  background-image: url('../../../../picture/루피슬픔.png');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
  
}
 
`;
const MyPage = styled.div`
  
  width: 100px;
  height: 100px;
  background-image: url('../../../../picture/루피인사.png');
  background-size: contain;
  background-repeat: no-repeat;
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
      <Box>
        <RandomFood onClick={goFood}/>
        <Detail>오늘 뭐먹지 <br/> Today 추천메뉴</Detail>
      </Box>
      <Box>
      <GominBoard onClick = {goFirebase}/>
        <Detail>고민 공유 게시판 <br/> My Firebase Board</Detail>
      </Box>
      <Box>
      <FreeBoard onClick = {goBoard}/>
        <Detail>자유게시판<br/> Free Talking Board</Detail>
      </Box>
      <Box>
        <FreeMarket/>
        <Detail>중고마켓<br/> </Detail>
      </Box>
      <Box>
        <MyPage/>
        <Detail>마이페이지 <br/> </Detail>
      </Box>
      
      
      
    </Wrapper>
</>
    )
     
}

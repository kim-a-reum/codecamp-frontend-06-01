import styled from "@emotion/styled";

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
  padding-right: 50px;
`;
const FreeMarket= styled.div`
  
  padding-right: 50px;
`;
const MyPage = styled.div`
  
  
`;
export default function LayoutNavigation() {
  return (
<>
    <Wrapper>
      <FreeBoard>자유게시판</FreeBoard>
      <FreeMarket>중고마켓</FreeMarket>
      <MyPage>마이페이지</MyPage>
    </Wrapper>
</>
    )
     
}

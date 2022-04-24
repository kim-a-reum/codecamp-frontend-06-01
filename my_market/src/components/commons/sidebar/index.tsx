import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`

  width: 500px;
  height: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Middle = styled.div`
  width: 260px;
  height: 1000px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`
const Talker = styled.div`
  padding: 70px;
  width :100%;
  height: 200px;
  text-align: center;
  font-size: 40px;
  display: flex;
  flex-direction: row;
  
  background-color:white;
`
const MyButton = styled.button`
  
  width: 130px;
  height: 50px;
  font-size: 20px;
  margin-bottom: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
  text-align: start;

`
const Button1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  height: 50px;
  justify-content: center;
`
const Button2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: center;
`
const Icon1 = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('../../../리스트.png');
  background-repeat: no-repeat;
`
const Icon2 = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('../../../새글.png');
  background-repeat: no-repeat;
`
export default function LayoutSidebar() {
  const router = useRouter()

  const onClickMain = ()=>{
    router.push('/main')
  
  }
  const onClickCreate = ()=>{
    router.push('/main/new')
  
  }

  return (
  <>
  <Wrapper>
    <Middle>
    
    
    
    <Talker>

      <h6>
      MY-MARKET
      </h6>
      
      
    </Talker>
    <Button1>
    <Icon1></Icon1>
    <MyButton onClick={onClickMain}>전체상품 보기</MyButton>
    </Button1>
    <Button2>
    <Icon2></Icon2>
    <MyButton onClick={onClickCreate}>새 상품 등록</MyButton>
    </Button2>
    
    </Middle> 
  </Wrapper>
  </>
  )
}

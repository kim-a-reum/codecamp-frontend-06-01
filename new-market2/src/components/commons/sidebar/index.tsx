import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basketItemsState, todayItemState } from "../../../commons/store";
import ZzimBasket from "../baskets";


const Wrapper = styled.div`

  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: #f5f7f8;

`;

const Middle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 40px 0px 40px; 
`
const Talker = styled.div`

  width :1800px;
  height: 50px;
  text-align: center;
  font-size: 40px;
  display: flex;
  flex-direction: row;
  
  /* background-image: url('../../../logo 1.png');
  background-repeat: no-repeat; */
  
  cursor: pointer;
`
const MyButton = styled.button`
  
  width: 150px;
  height: 50px;
  font-size: 30px;
  margin-bottom: 10px;
  background-color: #f5f7f8;
  border: none;
  cursor: pointer;
  text-align: start;

`
const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  height: 50px;
  justify-content: center;
`
const Icon1 = styled.div`
  width: 150px;
  height: 160px;
  background-image: url('../../../potato.png');
  background-size: contain;
  background-repeat: no-repeat;
`

const Icon2 = styled.div`
  width: 100px;
  height:100px;
  background-image: url('../../../cartoon.png');
  background-size: contain;
  background-repeat: no-repeat;
`

export default function LayoutSidebar() {
  const router = useRouter()
  const [basketItems,setBasketItems] = useRecoilState(basketItemsState)

  
  useEffect(()=>{
    const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
        setBasketItems(baskets)   
  },[])

  const onClickCreate = ()=>{

    router.push('/main/new')
  
  }
  const onClickMain = ()=>{
    router.push('/')
  
  }

  return (
  <>
  <Wrapper>
    <Middle>
      <Icon1></Icon1>
      <Talker onClick={onClickMain}>
        감자마켓
      </Talker>
      <MenuBox>
        <Icon2></Icon2>
        <MyButton onClick={onClickCreate}>상품 올리기</MyButton>
      </MenuBox>
    <ZzimBasket/>
    </Middle> 
  </Wrapper>
  </>
  )
}

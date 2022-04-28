import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basketItemsState, todayItemState } from "../../../commons/store";

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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 20px;
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
const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
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
const Icon3 = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('../../../아이콘.png');
  background-repeat: no-repeat;
`
const MyBasket = styled.div`
  width: 200px;

  border: 1px solid gray;
  background-color: bisque;

`

const MyToday = styled.div`
  width: 200px;
  border: 1px solid gray;
  background-color: bisque;
  
`
export default function LayoutSidebar() {
  const router = useRouter()
  const [basketItems,setBasketItems] = useRecoilState(basketItemsState)
  const [todayItems,setTodayItems] = useRecoilState(todayItemState)
  
  useEffect(()=>{
    const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
        setBasketItems(baskets)
    const todayitems = JSON.parse(localStorage.getItem("todayitems")|| "[]")
    setTodayItems(todayitems)    
  },[])
  const onClickDeletebasket = (el : any)=>{
 
    const newbaskets = basketItems.filter((basketEl) => basketEl._id !== el._id);
    localStorage.setItem("baskets",JSON.stringify(newbaskets))
    setBasketItems(newbaskets)

  }
  const onClickDeleteToday = (el : any)=>{
 
    const newtodays = todayItems.filter((basketEl) => basketEl._id !== el._id);
    localStorage.setItem("todayitems",JSON.stringify(newtodays))
    setTodayItems(newtodays)

  }
  const onClickMain = ()=>{
    router.push('/main')
  
  }
  const onClickCreate = ()=>{
    router.push('/main/new')
  
  }
  const onClickMypage = ()=>{
    router.push('/main/mypage')
  
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
      <MenuBox>
        <Icon1></Icon1>
        <MyButton onClick={onClickMain}>전체상품 보기</MyButton>
      </MenuBox>
      <MenuBox>
        <Icon2></Icon2>
        <MyButton onClick={onClickCreate}>새 상품 등록</MyButton>
      </MenuBox>
      <MenuBox>
        <Icon3></Icon3>
        <MyButton onClick={onClickMypage}>마이페이지</MyButton>
      </MenuBox>
    
      <MyBasket>
          나의 장바구니<br/>
          {basketItems.map((el)=>(
            <>
            <div key={el._id}>
              {el.name}            
            </div>
            <button onClick={()=>onClickDeletebasket(el)}>삭제</button>
            </>
          ))}
          
      </MyBasket>
      <MyToday>
       오늘 본 상품<br/>
          {todayItems.map((el)=>(
            <>
            <div key={el._id}>
              {el.name}            
            </div>
            <button onClick={()=>onClickDeleteToday(el)}>삭제</button>
            </>
          ))}
          
      </MyToday>
    </Middle> 
  </Wrapper>
  </>
  )
}

import styled from "@emotion/styled"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { todayItemState } from "../../../commons/store"

const BasketBody = styled.div`
  width: 230px;
  margin-top: 350px;
  margin-bottom: 20px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b98558;
  border: none;
  border-radius: 20px;


`

const Box = styled.div`
cursor: pointer;
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;

`
export const RealImage = styled.img`
  width: 80px;
  height: 80px;

  
`;
export const DefaultImage = styled.img`
  width: 100px;
  height: 100px;
  background-image: url('../../빈하트.png') ;
  background-size: cover;
`;
export default function ZzimBasket(){

  const [todayItems,setTodayItems] = useRecoilState(todayItemState)

    
    useEffect(()=>{
      
      const todayitems = JSON.parse(localStorage.getItem("todayitems")|| "[]")
      setTodayItems(todayitems)    

    },[])

    const onClickDelete = (el : any)=> ()=>{

      const baskets = JSON.parse(localStorage.getItem("todayitems") || "[]");

      const newTodaybaskets = baskets.filter((basketEl: any) => basketEl._id !== el._id);
      console.log(newTodaybaskets)
      localStorage.setItem("todayitems",JSON.stringify(newTodaybaskets))

      setTodayItems(newTodaybaskets)

    }
    return (
      <>
      <BasketBody>
      오늘 본 상품 
    {todayItems.map((el : any)=>(
      <>
      <Box onClick={onClickDelete(el)} key = {el._id}>
      판매자: {el.seller?.name}
      {el.images?.[0]
      ?
      <RealImage src={`http://storage.googleapis.com/${String(
        el.images?.[0]
        )}`}/>
        :
        <DefaultImage />
        }
      </Box>
        </>
      
      
    ))}


   </BasketBody>


    {/* <BasketBody>
      최근 본 상품 
      {todayItems[todayItems.length-3]?.name 
      ?
      <>
      <DefaultImage></DefaultImage>
      <Box>{todayItems[todayItems.length-3]?.name}</Box>
      </>
    :
     <></>
    }

{todayItems[todayItems.length-2]?.name 
      ?
      <>
      <DefaultImage></DefaultImage>
      <Box>{todayItems[todayItems.length-2]?.name}</Box>
      </>
    :
     <></>
    }

{todayItems[todayItems.length-1]?.name 
      ?
      <>
      <DefaultImage></DefaultImage>
      <Box>{todayItems[todayItems.length-1]?.name}</Box>
      </>
    :
     <></>
    }

    </BasketBody> */}





{/* {todayItems && 
<BasketBody>
최근 본 상품
{todayItems[todayItems.length-3]?.images[0]
  ?
  
  <RealImage src={`http://storage.googleapis.com/${String(
    todayItems[todayItems.length-3]?.images[0]
    )}`}></RealImage>
    :
    
    <DefaultImage></DefaultImage>
  }
  
  <Box>1.{todayItems[todayItems.length-3]?.name}</Box><br/>
  
  {todayItems[todayItems.length-2]?.images[0]
    ?
    
    <RealImage src={`http://storage.googleapis.com/${String(
      todayItems[todayItems.length-2]?.images[0]
      )}`}></RealImage>
      :
      
      <DefaultImage></DefaultImage>
    }
    <br/><Box>2.{todayItems[todayItems.length-2]?.name}</Box>
    
    <br/>
    {todayItems[todayItems.length-1]?.images[0]
      ?
      
      <RealImage src={`http://storage.googleapis.com/${String(
        todayItems[todayItems.length-1]?.images[0]
        )}`}></RealImage>
        :
        
        <DefaultImage></DefaultImage>
      }
      <br/><Box>3.{todayItems[todayItems.length-1]?.name}</Box>
      
      
    </BasketBody>
  } */}
    </>
    )
  }

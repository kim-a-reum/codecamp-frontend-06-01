import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import Modal from "antd/lib/modal/Modal"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState, basketItemsState} from "../../../commons/store"
import "antd/dist/antd.css";
import Mypage from "../../mypage/mypage.container"

const Navigation = styled.div`
width: 85%;
height: 50px;
margin-top: 30px;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding-right: 100px;
`
const Login = styled.button`
width: 150px;
height: 40px;
background-color: white;
border: none;
font-size: 25px;
margin-right: 10px;
cursor: pointer;
:hover{
  color : indianred;
}
`
const Header = styled.div`
display: flex;
flex-direction: row;
width: 1000px;

`
const Basket = styled.button`
width: 100px;
height: 40px;
background-color: white;
border: none;
font-size: 25px;
cursor: pointer;
:hover{
  color : indianred;
}
`
const Buy =styled.button`
  height: 29px;
  font-size: 22px;
  margin-left: 10px;
  border: none;
  background-color: white;
  border-bottom: 1px solid black;
`
const Logout =styled.button`
  height: 29px;
  font-size: 22px;
  margin-left: 100px;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover{
    border-bottom: 1px solid black;
  }

`
const TopBasket =styled.button`
  height: 29px;
  font-size: 22px;
  margin-left: 100px;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover{
    border-bottom: 1px solid black;
  }

`
const TopMypage =styled.button`
  height: 29px;
  font-size: 22px;
  margin-left: 100px;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover{
    border-bottom: 1px solid black;
  }

`
const MyB = styled.div`
margin-top: 5px;
  width: 20px;
  height: 25px;
  background-color: #ec6f45;
  border-radius: 50px;
  text-align: center;
  line-height: normal;
  font-size: 20px;
`
const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            _id
            email
            name
            userPoint{   
                amount
                createdAt
            }

        }
    }

`
const LOGOUT_USER = gql`
    mutation logoutUser{
      logoutUser
    }

`



export default function NavigationPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const [accessToken] = useRecoilState(accessTokenState)
    const [logout] = useMutation(LOGOUT_USER)
    const [basketItems,setBasketItems] = useRecoilState(basketItemsState)



    useEffect(()=>{
      
      const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
      setBasketItems(baskets)    

    },[])

    const onClickLogin = ()=>{
     router.push('/login')
    }
    const onClickLogout = ()=>{
      console.log("로그아웃")
      logout({variables:{}})
     }

    function onClickMypage(event: any) {
      router.push('/mypage')
    }
console.log(data)
    return (
        <div>

        <Navigation>
        
          { accessToken ?
          <Header>
            <div> {data?.fetchUserLoggedIn.name}님 포인트 {data?.fetchUserLoggedIn.userPoint.amount} P</div> 
            {/* <Buy onClick={onClickOpenModal}>충전</Buy> */}
            <Logout 
            onClick = {onClickLogout}
            >
              로그아웃</Logout>
            <TopBasket>장바구니</TopBasket>
            <MyB>{basketItems.length}</MyB>
            <TopMypage onClick={onClickMypage}>마이페이지</TopMypage>
          </Header>
          :
          <>
          <Login onClick={onClickLogin}>로그인 </Login> 
          <Basket>장바구니</Basket>
          </>
          }
    
        
        </Navigation>
        </div>

    )
}
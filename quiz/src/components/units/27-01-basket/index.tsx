import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";
import { getDate } from "../../utility";


const MyRow = styled.div`
display: flex;
flex-direction: row;
width: 550px;
font-size: 20px;
height: 70px;
`;

const MyColumn = styled.div`
width: 150px;
font-size: 20px;
`;
 
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Left = styled.div`
  
`
const Right = styled.div`
font-size: 15px;
  
`


export default function ProductList(props){
    const data = getDate(new Date)
    
    const[inbasket,setInbasket] = useState(false)
    const onClickBasket = (el : IBoard) => ()=>{
        console.log(el);

        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        // 2. 이미 담겼는지 확인하기
        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
        if (temp.length === 1) {
          const newbaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
          localStorage.setItem("baskets",JSON.stringify(newbaskets))
          setInbasket(false)
          return;
        }
             // 3. 장바구니에 담기
            const { __typename, ...newEl } = el;
            baskets.push(newEl);
         
            localStorage.setItem("baskets", JSON.stringify(baskets));
            localStorage.setItem("date",data)
            setInbasket(true)
             }
        console.log(data)
    return(

        <Wrapper>
          
          <Left>

                <MyRow key={props.el._id}>
                <MyColumn>{props.el.writer}</MyColumn>
                <MyColumn>{props.el.title}</MyColumn>
                <button onClick={onClickBasket(props.el)}>{ inbasket ? "장바구니 취소" : "장바구니 담기"}</button>
              </MyRow>
          </Left>
          <Right>
            {inbasket ?  <MyColumn> {data}에 장바구니에 담은 상품 입니다 
            </MyColumn> : <MyColumn></MyColumn>}
            
          </Right>
            
</Wrapper>
    )




}
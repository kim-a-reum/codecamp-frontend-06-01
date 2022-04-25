import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basketItemsState, todayItemState } from "../../../commons/store";
import { ModalError, Modalsuccess } from "../../utility";
import FetchUsedItemPageUI from "./fetchUseditem.presenter";
import { FETCH_USED_ITEM } from "./fetchUseditem.query";

export default function FetchUsedItemPage (){
    const router = useRouter()
    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query.itemid) },
      });
    const [basketItems,setBasketItems] = useRecoilState(basketItemsState)


    const onClickEdit = () =>{
        router.push(`/main/${router.query.itemid}/edit`)
    }

    const onClickBasket = (el : any)=>{
        try{

            // 1. 기존 장바구니 가져오기
            const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
            // 2. 이미 담겼는지 확인하기
            const temp = baskets.filter((basketEl : any) => basketEl._id === el._id);
            if (temp.length === 1) {
                alert("이미 담으신 상품입니다.");
                return;
            }
            // 삭제하기
            // const newbaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
            // 이거를 setItem에 넣기
            
            // 3. 장바구니에 담기
            const { __typename, ...newEl } = el;
            baskets.push(newEl);
            localStorage.setItem("baskets", JSON.stringify(baskets));
            setBasketItems(baskets)
            Modalsuccess({content: "장바구니에 담았어요 ! "})         
        }catch(error){
            ModalError({content:"엇"})
    
        }
        }
        
return(
    <FetchUsedItemPageUI
    data={data}
    onClickEdit={onClickEdit}
    onClickBasket={onClickBasket}
    />
)



}
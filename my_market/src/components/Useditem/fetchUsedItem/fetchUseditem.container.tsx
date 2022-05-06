import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { basketItemsState} from "../../../commons/store";
import { ModalError, Modalsuccess } from "../../utility";
import FetchUsedItemPageUI from "./fetchUseditem.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM, TOGGLE_USED_ITEM_PICK, TRANSACTION_OF_BUYING } from "./fetchUseditem.query";

export default function FetchUsedItemPage (){
    const router = useRouter()
    const { data, refetch } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query.itemid) },
      });
    const [basketItems,setBasketItems] = useRecoilState(basketItemsState)
    const [buyItem]=useMutation(TRANSACTION_OF_BUYING)
    const [deleteUseditem]= useMutation(DELETE_USED_ITEM)
    const [togglePick] = useMutation(TOGGLE_USED_ITEM_PICK)



    const onClickEdit = () =>{
        router.push(`/main/${router.query.itemid}/edit`)
    }
    const onClickDelete = (event)=>{
        try{
            deleteUseditem({
                variables:{useditemId: String(router.query.itemid)}
            })
            Modalsuccess({content: "상품 삭제 성공! 목록으로 이동합니다 "})
            router.push('/main')
        }catch(error){
            ModalError({content : "본인 상품만 삭제 가능합니다"})
        }

    }
    const onClickBuy = (event: any) =>{
        try{
            buyItem({
                variables:{
                    useritemId: String(router.query.itemid)
                }
            })
            Modalsuccess({content: "구매완료! 탁월한 선택입니다!"})
        }catch(error){
            ModalError({content: "구매에 실패했어요...ㅠㅠ"})
        }
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
    const onClicktoggle = (event)=>{
        togglePick({variables:{useditemId: String(router.query.itemid) } })
        refetch({useditemId: String(router.query.itemid)})

    }
return(
    <FetchUsedItemPageUI
    data={data}
    onClicktoggle={onClicktoggle}
    onClickEdit={onClickEdit}
    onClickBasket={onClickBasket}
    onClickBuy={onClickBuy}
    onClickDelete={onClickDelete}
    />
)



}
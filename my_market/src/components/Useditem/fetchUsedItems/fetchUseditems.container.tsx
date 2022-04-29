import {useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { basketItemsState, todayItemState } from "../../../commons/store";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../commons/types/generated/types";
import { Modalsuccess } from "../../utility";
import FetchUsedItemsPageUI from "./fetchUseditems.presenter";
import { FETCH_USED_ITEMS } from "./fetchUseditems.query";


const Myscroll = styled.div`
height: 1200px;
  /* overflow:auto; */
  


`
const Bodybox = styled.div`
    display: flex ;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;

`


export default function FetchUsedItemsPage(){
    const router = useRouter()
    const {data, fetchMore} =useQuery<Pick<IQuery,"fetchUseditems">,IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS)
    
    const [todayItems,setTodayItems] = useRecoilState(todayItemState)
    const [basketItems,setBasketItems] = useRecoilState(basketItemsState)
    
    const onClickDetail = (el: any)=>()=> {
        
          router.push(`main/${el._id}`);
        
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        const todayitems = JSON.parse(localStorage.getItem("todayitems") || "[]");
        const temp = todayitems.filter((basketEl : any) => basketEl._id === el._id);
        if (temp.length === 1) {
        Modalsuccess({content:"두 번 이상 조회한 게시물이라 장바구니에 넣을게요! 히히"});
        baskets.push(el)
        setBasketItems(baskets)
        localStorage.setItem("baskets", JSON.stringify(baskets));
          } else {
        todayitems.push(el);
        localStorage.setItem("todayitems", JSON.stringify(todayitems));
        setTodayItems(todayitems)     
       
          }
        
        
      };

    
    const onLoadMore = () => {
      if(!data) return;
      fetchMore({
          variables : {page: Math.ceil(data?.fetchUseditems.length / 10) + 1},
          updateQuery: (prev,{fetchMoreResult}) => {
              if(!fetchMoreResult?.fetchUseditems) 
              return {fetchUseditems:[...prev.fetchUseditems]}
              return {
                fetchUseditems: [...prev.fetchUseditems,...fetchMoreResult.fetchUseditems]
              };
          },
      });
  };

    return(
        <>
        <Myscroll>

            <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
            >
            
              <Bodybox>
            {data?.fetchUseditems.map((el:any, index: Number)=>(
              <FetchUsedItemsPageUI
              key={el._id}
              index={index}
              el={el}
              onClickDetail={onClickDetail(el)}
              data={data}
              />
              
              ))}
              </Bodybox>
              </InfiniteScroll>
          </Myscroll>
        </>
    )
}
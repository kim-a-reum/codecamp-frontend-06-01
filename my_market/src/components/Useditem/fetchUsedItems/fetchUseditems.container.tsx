import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import FetchUsedItemsPageUI from "./fetchUseditems.presenter";
import { FETCH_USED_ITEMS } from "./fetchUseditems.query";


const Myscroll = styled.div`
height: 500px;
  overflow:auto;


`


export default function FetchUsedItemsPage(){
    const router = useRouter()
    const {data, fetchMore} =useQuery(FETCH_USED_ITEMS)
    
    
    const onClickDetail = (event) => {
        if (event.target instanceof Element) {
          router.push(`main/${event.target.id}`);
        }
      };
    console.log(data)


    return(
        <>
        
            
            
            <FetchUsedItemsPageUI
            onClickDetail={onClickDetail}
            data={data}
            />
         
        </>
    )
}
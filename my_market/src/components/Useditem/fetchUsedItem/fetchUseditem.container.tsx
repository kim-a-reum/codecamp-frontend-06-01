import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FetchUsedItemPageUI from "./fetchUseditem.presenter";
import { FETCH_USED_ITEM } from "./fetchUseditem.query";

export default function FetchUsedItemPage (){
    const router = useRouter()
    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query.itemid) },
      });

return(
    <FetchUsedItemPageUI
    data={data}
    />
)



}
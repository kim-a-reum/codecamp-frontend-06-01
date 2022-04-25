//게시글 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CreateUsedItemPage from "../../../../src/components/Useditem/createUsedItem/createUsedItem.container";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!){
        fetchUseditem(useditemId:$useditemId){
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
            useditemAddress {
                    zipcode
                    address
                    addressDetail
                            }
            buyer {
                    _id
                    email
                    name
                    picture
                    }
            seller {
                _id
                email
                name
            picture
                }
            soldAt
            createdAt

        }
    }
`

export default function BoardsFetchPage(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_USED_ITEM,
        {variables : { useditemId:String(router.query.itemid)} });


console.log(data)
    return(
<CreateUsedItemPage isEdit={true} data={data}/>
    )


}
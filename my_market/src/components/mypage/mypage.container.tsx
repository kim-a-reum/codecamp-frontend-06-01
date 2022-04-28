import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../commons/types/generated/types";
import MyPageUI from "./mypage.presenter";


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
const FETCH_ITEMS_I_BOUGHT = gql`
    query fetchUseditemsIBought($search: String, $page: Int){
        fetchUseditemsIBought(search:$search, page:$page){
            _id
            name
            price
            images
            seller{
                name
            }
            soldAt
            

        }
    }

`

export default function Mypage(){
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const {data : data2} = useQuery(FETCH_ITEMS_I_BOUGHT)

    

    return(<MyPageUI
    data={data}
    data2={data2}
    />)
}
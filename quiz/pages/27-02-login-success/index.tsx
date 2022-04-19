import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"
import { withAuth } from "../../src/components/commons/hocs/withAuth"


const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            email
            name
        }
    }

`



 function LoginSuccessPage(){


    const router = useRouter()
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const [accessToken] = useRecoilState(accessTokenState)
    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        console.log(baskets)
        if(baskets.length >= 1){
            alert("장바구니에 담겨있는 상품이 있습니다 보러 이동합니다!")
            router.push('/27-01-basket-list')
        }
        
      }, []);
    
    
    return (
        <>
        <div>{data?.fetchUserLoggedIn.name}님 어서오세욧 ! </div>
        <img src="../picture/루피요리사.jpeg"></img>
        </>
    )
}

export default withAuth(LoginSuccessPage)
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
    

    console.log(data?.fetchUserLoggedIn)
    console.log(accessToken)
    return (
        <>
        <div>{data?.fetchUserLoggedIn.name}님 어서오세욧 ! </div>
        <img src="../picture/루피요리사.jpeg"></img>
        </>
    )
}

export default withAuth(LoginSuccessPage)
import { gql, useQuery } from "@apollo/client"


const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            email
            name
        }
    }

`
export default function LoginSuccessPage(){
    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    
    console.log(data)
    return (
        <>
        <div>{data?.fetchUserLoggedIn.name}님 어서오세욧 ! </div>
        <img src="../임정아화살표.svg"></img>
        </>
    )
}
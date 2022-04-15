
import { useRecoilState } from "recoil";
import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const [,setuserInfo] = useRecoilState(userInfoState)

    if(typeof window !== "undefined"){
        console.log("여기는브라우져입니다")
    }else{
        console.log("여기는 프론트엔드서버, yarn dev공간입니다 ")
    }
    useEffect(()=>{
      const accessToken = localStorage.getItem("accessToken")
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
            setAccessToken(accessToken || "")
            setuserInfo(userInfo)
    },[])
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        headers: {Authorization:`Bearer ${accessToken}` }
      })
      const client = new ApolloClient({
        
        link : ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
      });
    return (
        <ApolloProvider client={client}>

            {props.children}
            {/* global, layout component애들이 여기로 들어가게된다  */}
        </ApolloProvider>
    )
}
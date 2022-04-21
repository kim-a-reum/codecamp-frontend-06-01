import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../store";

export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const [,setuserInfo] = useRecoilState(userInfoState)

     const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
      })
      const client = new ApolloClient({
    
        link : ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
      });
    
      if(typeof window !== "undefined"){
        console.log("여기는브라우져입니다")
    }else{
        console.log("여기는 프론트엔드서버, yarn dev공간입니다 ")
    }
    useEffect(()=>{
        const MyaccessToken = localStorage.getItem("accessToken")
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
        setAccessToken(MyaccessToken || "")
        setuserInfo(userInfo)
      },[])


    return (
        <ApolloProvider client={client}>
        {props.children}
        </ApolloProvider>
    )
}
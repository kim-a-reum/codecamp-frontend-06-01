
import { useRecoilState } from "recoil";
import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { accessTokenState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
  // 1. 더이상 지원되지 않음 
    // if(process.browser){

    // } else {
    //   //프론트엔드 서버일때, yarn dev일때 여기일때,, 실행해줘
    // }
    // 2. 브라우져에서 토큰을 가져와서 서버에 넘겨줘서 다시 그려질때 그려주는 방법 
    if(typeof window !== "undefined"){
        console.log("여기는브라우져입니다")
            // const mylocalstorageAccessToken = localStorage.getItem("accessToken")
            // setAccessToken(mylocalstorageAccessToken || "")
    }else{
        console.log("여기는 프론트엔드서버, yarn dev공간입니다 ")
    }

    useEffect(()=>{
      const mylocalstorageAccessToken = localStorage.getItem("accessToken")
            setAccessToken(mylocalstorageAccessToken || "")
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
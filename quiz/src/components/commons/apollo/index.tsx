
import { useRecoilState } from "recoil";
import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { accessTokenState } from "../../../commons/store";
import { useEffect } from "react";

export default function ApolloSetting(props : any){
  const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
  
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
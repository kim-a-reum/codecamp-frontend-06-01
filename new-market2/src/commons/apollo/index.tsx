import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable} from "../store";
import {onError} from '@apollo/client/link/error'
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";
export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable)

    useEffect(()=>{
    //   getAccessToken().then((newAccessToken)=>{
    //     setAccessToken(newAccessToken)
    // })
    restoreAccessToken.toPromise().then((newAccessToken)=>{
      setAccessToken(newAccessToken)
    })
      // 토큰 로컬스토리지에 저장하는건 말이 안돼 
      // const MyaccessToken = localStorage.getItem("accessToken")
      // setAccessToken(MyaccessToken || "")

    },[])




    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        if (graphQLErrors) {
          for (const err of graphQLErrors) {
            // 1-2. 해당 에러가 토큰만료 에러(UNAUTHENTICATED)인지를 체크
            if (err.extensions.code === "UNAUTHENTICATED") {
              // 2-1. refreshToken으로 accessToken을 재발급 받기
              getAccessToken().then((newAccessToken) => {
                // 2-2. 재발급 받은 accessToken 저장하기
                setAccessToken(newAccessToken);
    
                // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
                operation.setContext({
                  headers: {
                    ...operation.getContext().headers,
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                });
                // 3-2. 변경된 operation 재요청하기
                return forward(operation);
              });
            }
          }
        }
      });

     const uploadLink = createUploadLink({
        uri: "https://backend06.codebootcamp.co.kr/graphql",
        headers:{authorization : `Bearer ${accessToken}`},
        credentials: "include"
      })
      const client = new ApolloClient({
    
        link : ApolloLink.from([errorLink,uploadLink]),
        cache: new InMemoryCache(),
      });
    
      if(typeof window !== "undefined"){
        console.log("여기는브라우져입니다")
    }else{
        console.log("여기는 프론트엔드서버, yarn dev공간입니다 ")
    }


    return (
        <ApolloProvider client={client}>
        {props.children}
        </ApolloProvider>
    )
}
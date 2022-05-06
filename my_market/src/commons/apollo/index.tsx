import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../store";
import {onError} from '@apollo/client/link/error'
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";
export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const [,setuserInfo] = useRecoilState(userInfoState)

    useEffect(()=>{
      getAccessToken().then((newAccessToken)=>{
        setAccessToken(newAccessToken)
    })
      // const MyaccessToken = localStorage.getItem("accessToken")
      // setAccessToken(MyaccessToken || "")
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
      setuserInfo(userInfo)
    },[])




    const errorLink = onError(({graphQLErrors, operation,forward})=>{
      if(graphQLErrors){ // 에러가 있다면 
          for(const err of graphQLErrors){// err 종류 반복문 돌려서 
              if(err.extensions.code === "UNAUTHENTICATED"){// 해당 에러가 토큰만료 에러이면(UNAUTHENTICATED)
                  // accesstoken을 재발급 받기 
                  getAccessToken().then((newAccessToken)=>{
                      setAccessToken(newAccessToken)
                  // 실패한 쿼리 재 요청하기 
                  // operation 쿼리에서 모든것 다 납두고 헤더만 바꿔치기 
                  // operation.getContext().headers 말고 헤더를 새롭게 set
                  operation.setContext({
                      headers: {
                          ...operation.getContext().headers,
                          // 1. 헤더 안에는 현재 authorization밖에 없어서 걔를 통째로 갈아 엎어도 된다
                          Authorization:`Bearer ${newAccessToken}` 
                          // 2. 주의 사항 : 다른 여러가지들이 들어있으면 사라지게 되니까 덮어쓰기는 위험하다! 
                          // 3. accessToken만 바꿔주자! 
                      }
                  }) 
                  return forward(operation)
                  // 변경된 operation 재요청하기 
                  })
              }
          }
      }

  })

     const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        headers:{authorization : `Bearer ${accessToken}`}
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

import { useRecoilState } from "recoil";
import { createUploadLink } from 'apollo-upload-client'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useEffect } from "react";
import {onError} from '@apollo/client/link/error'

import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props : any){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)
    const [,setuserInfo] = useRecoilState(userInfoState)

    if(typeof window !== "undefined"){
        console.log("여기는브라우져입니다")
    }else{
        console.log("여기는 프론트엔드서버, yarn dev공간입니다 ")
    }


    useEffect(()=>{
        getAccessToken().then((newAccessToken)=>{
            setAccessToken(newAccessToken)
        })
      const accessToken = localStorage.getItem("accessToken")
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
            setAccessToken(accessToken || "")
            setuserInfo(userInfo)
    // accessToken 재발급받아서 state에 넣어주기

    },[])


// 아폴로 독스에 나와있어요 
    // graphQLErrors 는 구조분해 할당으로 받았고, 방금 실패했던 쿼리는 operation, 걔를 전송해줘 하면 forward 쓰면 된다 
    const errorLink = onError(({graphQLErrors, operation,forward})=>{
        // 1. error를 캐치
        if(graphQLErrors){
            // 독스에 나와있는 내용 그대로이다 그 안에있는 에러 개수만큼 한개씩 반복문 돌린다
            for(const err of graphQLErrors){
                // 1- 1. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
                if(err.extensions.code === "UNAUTHENTICATED"){
                    // 2-1.Refresh토큰으로 accesstoken을 재발급 받기 
                    getAccessToken().then((newAccessToken)=>{
                        setAccessToken(newAccessToken)
                    // 3.재발급 받은 accesstoken으로 방금 실패한 쿼리 재 요청하기 
                    // operation 쿼리에서 모든것 다 납두고 헤더만 바꿔치기 (새로받은 토큰을 넣어줘야 하니까)
                    // operation.getContext().headers 헤더를 가져오자 말고 헤더를 새롭게 만들어주자 
                    operation.setContext({
                        headers: {
                            ...operation.getContext().headers,
                            // 3. 원래있던 헤더의 내용을 가져오고
                            // 1. 헤더 안에는 현재 authorization밖에 없어서 걔를 통째로 갈아 엎어도 된다
                            Authorization:`Bearer ${newAccessToken}` 
                            // 2. 주의 사항 : 다른 여러가지들이 들어있으면 사라지게 되니까 덮어쓰기는 위험하다! 
                            // 4. accessToken만 바꿔주자! 
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
        uri: "https://backend06.codebootcamp.co.kr/graphql",
        headers: {Authorization:`Bearer ${accessToken}` },
        credentials:"include",
      })
      const client = new ApolloClient({
        
        link : ApolloLink.from([errorLink,uploadLink]),
        cache: new InMemoryCache(),
      });
    return (
        <ApolloProvider client={client}>

            {props.children}
            {/* global, layout component애들이 여기로 들어가게된다  */}
        </ApolloProvider>
    )
}
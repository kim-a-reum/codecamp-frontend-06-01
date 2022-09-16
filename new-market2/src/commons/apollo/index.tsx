import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    //   getAccessToken().then((newAccessToken)=>{
    //     setAccessToken(newAccessToken)
    // })
    restoreAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    // 토큰 로컬스토리지에 저장하는건 말이 안돼
    // const MyaccessToken = localStorage.getItem("accessToken")
    // setAccessToken(MyaccessToken || "")
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  if (typeof window !== "undefined") {
    console.log("여기는브라우져입니다");
  } else {
    console.log("여기는 프론트엔드서버, yarn dev공간입니다 ");
  }

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

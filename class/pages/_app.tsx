import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
//안트디자인 많이 쓸거니까 폴더 안에있는 app.tsx에다가 해주면 됨 1

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    //이주소가 백엔드 컴퓨터 주소야 라는걸 알려주는중
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
//이렇게 써도 원래 우리가 쓰던거랑 같은 방식 !
import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";


export default function MyApp({ Component, pageProps  }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",

    cache: new InMemoryCache(),
  });
  return (
    
   (
     <ApolloProvider client={client}>
      <Layout>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
     ) 
  );
}



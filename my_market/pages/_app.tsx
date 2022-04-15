import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import Layout from '../src/components/commons';


export default function  MyApp({ Component, pageProps  }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  })
  // 업로드설  정을 해준후 uploadLink에 넣어서 apollolink에 넣어준거다 

  const client = new ApolloClient({
    
    link : ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    
   (
     <ApolloProvider client={client}>
      {/* <Layout> */}
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
     ) 
  );
   }



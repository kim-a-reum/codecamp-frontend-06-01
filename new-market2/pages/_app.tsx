import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import Layout from '../src/components/commons';
import ApolloSetting from '../src/commons/apollo';
import { RecoilRoot } from 'recoil';


export default function  MyApp({ Component, pageProps  }: AppProps) {



  
  return (
    
   (
     <RecoilRoot>

      <ApolloSetting>

      <Layout>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
      </Layout>
      </ApolloSetting>
    
     </RecoilRoot>
     ) 
  );
   }



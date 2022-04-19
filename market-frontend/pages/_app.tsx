import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/commons/apollo";
import { RecoilRoot } from "recoil";



export default function MyApp({ Component, pageProps  }: AppProps) {
 
 
  return (
    
   <RecoilRoot>

     <ApolloSetting>
      <Layout>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
      </Layout>
     </ApolloSetting>
   </RecoilRoot>
    
     
  );
}



import "../styles/globals.css";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import {RecoilRoot} from 'recoil'
import ApolloSetting from "../src/components/commons/apollo";


function MyApp({ Component, pageProps }) {
 
  return (
    <RecoilRoot>

    <ApolloSetting>

      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
   
    </RecoilRoot>
  );
}

export default MyApp;

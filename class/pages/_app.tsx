// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import {RecoilRoot} from "recoil"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_PpdoP_F6XlDmL6rIF-Vaj-ibVtdeNw",
  authDomain: "reumisite.firebaseapp.com",
  projectId: "reumisite",
  storageBucket: "reumisite.appspot.com",
  messagingSenderId: "1019450482850",
  appId: "1:1019450482850:web:f30558d41b2c075175b7fb"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);




function MyApp({ Component, pageProps }: AppProps) {
  
  return (<>
   {/* <Head> //모든페이지에서 카카오 맵을 다운받으므로 비효율적이다 
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5"
        ></script>
  </Head> */}
  <RecoilRoot>        
    <ApolloSetting>
    {/* 아폴로설정을 commons 컴포넌트로 빼주고 이 밑에 애들을 children으로 넣음  */}
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
 
  </RecoilRoot>
  </>
  );
}

export default MyApp;

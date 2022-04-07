import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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



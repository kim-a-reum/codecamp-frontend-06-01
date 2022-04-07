// import "../styles/globals.css";
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUploadLink } from 'apollo-upload-client'
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
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql"
  })
  const client = new ApolloClient({
    
    link : ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

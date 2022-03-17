import '../styles/globals.css'
import {ApolloClient, ApolloProvider,InMemoryCache } from "@apollo/client"


function MyApp({ Component, pageProps }) {
  
  const client = new ApolloClient({

    uri: "http://backend06.codebootcamp.co.kr/graphql",
    //이주소가 백엔드 컴퓨터 주소야 라는걸 알려주는중 
    cache: new InMemoryCache()
})
  return (
  <ApolloProvider client={client}>

  <Component {...pageProps} />

  </ApolloProvider>
  )
}

export default MyApp
 //이렇게 써도 원래 우리가 쓰던거랑 같은 방식 ! 
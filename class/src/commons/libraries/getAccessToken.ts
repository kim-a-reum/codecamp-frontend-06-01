import {GraphQLClient,gql} from 'graphql-request'


const RESTORE_ACCESS_TOKEN =gql`
mutation restoreAccessToken{
    restoreAccessToken{
        accessToken
    }
}
`

export async function getAccessToken(){

    try{
        const graphQLClient = new GraphQLClient("https://backend06.codebootcamp.co.kr/graphql",
        {credentials: "include"});

        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN)
        // 독스있는  그대로 쿼리 담아주고 결과를 담아보자 
        // result안에 새로 받은 accesstoken이 들어오겠지
       const newAccessToken = result.restoreAccessToken.accessToken
    //    2-2.새로받은 토큰을 꺼내서 글로벌스테이트에 저장해주자 
    return newAccessToken

    }catch(error){
        console.log(error.message)

    }
   
}
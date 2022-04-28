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
        {credentials: "include"}); // 시큐어 옵션때문에 https로 바꾸어줘야함 

        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN) // graphql-request 라이브러리 적용 
        // result안에 새로 받은 accesstoken 담아줌
       const newAccessToken = result.restoreAccessToken.accessToken
    //    2-2.새로받은 토큰을 꺼내서 글로벌스테이트에 저장해주자 
    return newAccessToken

    }catch(error){
        console.log(error.message)

    }
   
}
console.log("typescript 완료")

import {DataSource} from "typeorm"
import { Board } from "./Board.postgres"





import {ApolloServer, gql} from 'apollo-server'

// 1. 타입
const typeDefs = gql`

input CreateBoardInput{
    writer: String,
    title: String,
    contents: String,
}

type Board {
    number: Int,
    writer: String,
    title: String,
    contents: String,
}

type Query {

fetchBoards: [Board]
}

type Mutation {
    #   createBoard(writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput): String

}
`

// 2. api
const resolvers = {
  Query: {
    fetchBoards: async () => {
    const result= await Board.find();
    return result;
},
},
Mutation :{
    createBoard: async (_: any, args: any) => {
    // 데이터베이스에 접속해서 게시물 등록하기 
    await Board.insert({
        ...args.createBoardInput,
        // writer : args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,  
        
      })
    //   Board.update({writer:"철수"},{writer:"영희"}) 수정하면 
        // Board.delete({})
        return "등록 성공한건가봐요! "
}

  }
  
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const AppDataSource = new DataSource({
    type:"postgres",
    host: "34.64.124.189",
    port: 5012,
    username : 'postgres',
    password : 'postgres2021',
    database : 'postgres',
    entities:[Board],
    synchronize: true,
    logging: true,

});

AppDataSource.initialize()
.then(()=>{
    console.log("연결성공!")
    // 백엔드 api를 오픈-리슨하자 (24시간동안 접속가능하게끔 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });



}).catch(()=>{
    console.log("연결실패1")
})
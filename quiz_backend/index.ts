import {DataSource} from "typeorm"
import {ApolloServer, gql} from 'apollo-server'
import { Product} from "./Product.postgres"


// 타입적어주는곳 
const typeDefs = gql`

input CreateProductInput{

    name: String,
    detail: String,
    price: Int,
}
input updateProductInput{

name: String,
detail: String,
price: Int,
}

type Product{
    _id:String,
    seller: String,
    name: String,
    detail: String,
    price: Int,

}
type fetchProduct{
    seller: String,
    name: String,
    detail: String,
    price: Int,
}

type updateProduct{
    _id: String,
    name: String,
    detail: String,
    price: Int,
}

type Query {

fetchProduct(_id:String): [Product]
fetchProducts: [Product]
}


type Mutation {
    createProduct(seller:String, createProductInput: CreateProductInput!):String
    updateProduct(_id:String, updateProductInput: updateProductInput!): String
    deleteProduct(_id: String):String
}

`
const resolvers = {
    // 쿼리부분 api 뭘 가져와서 어디에 담아서 어떻게 줄꺼야
    Query: {
    
    fetchProducts: async () => {
        const result= await Product.find();
        return result;
        
    },
    fetchProduct: async (_: any, args: any) => {
        const result= await Product.find({where:{_id: args._id}});
        return result
    }
    },

    // 뮤테이선 api 등록을 어떤형식을 참조해서 그 값을 어떻게 넣어줄꺼니 
    Mutation :{
        createProduct: async (_: any, args: any) => {
    
        await Product.insert({
            seller : args.seller,
            ...args.createProductInput,
            
            
          })
            return "등록성공입니다!"
    },
    updateProduct: async(_: any, args: any) => {
    
        await Product.update({_id:args._id},{name:args.updateProductInput.name, detail: args.updateProductInput.detail, price: args.updateProductInput.price})
            return "수정성공입니다!"
        //객체로 쓰는법 정리하자  
    },
    deleteProduct: async(_: any, args: any) => {
    
        await Product.delete({_id:args._id})
            return "삭제성공입니다!"
        //객체로 쓰는법 정리하자  
    }
    
    
    
      }


}

const server = new ApolloServer({
    // typeDefs와 resolvers는 위에 우리가 만들어준 타입과 api이다
    typeDefs,
    resolvers,
  });



const AppDataSource = new DataSource({
    type : "postgres",
    database : "postgres",
    username : "postgres",
    password : "postgres2021",
    port : 5012,
    host : "34.64.124.189",
    entities :[Product],
    logging : true,
    synchronize : true,
    
})

AppDataSource.initialize()
.then(()=>{
    console.log("연결성공입니다!")
    server.listen(4000).then(({ url }) => {
        console.log(`😎 Server ready at ${url}`);
    });

}).catch(()=>{
    console.log("연결실패에요....")
})
// import axios from 'axios'
import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'
const CREATE_BOARD =gql`
        mutation CreateBoard ($writer: String, $title: String ,$contents: String){ 
                 # //graphql의 장점은 골라받는게 가능해서, restapi는 axios를 원하는 데이터 마다 써줘야해서 const절이 계속 늘어나 !
                # 그래서 위처럼 mymutation으로 묶음 배송.. 효율적인 API 배송이 가능해진다 
                createBoard(     
                writer : $writer,title : $title, contents : $contents ) 
            {     _id     
                number    
                message    } 
}`

export default function GraphqlMutationPage(){
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGrapphqlApi = async () => {

            // const result = await axios.get("https://koreanjson.com/posts/2") //rest-api 방식 !! 
                const result = await callApi({
                    variables: { writer : "배고프당...", title : "이제 곧 점심시간~", contents : "123 " }
                } )// graphql -api 방식 
                console.log(result)
                console.log(result.data.createBoard.message)
                setData(result.data.createBoard.message)
            
            // 
    }
    
    return(
        <div> 
        <div>{data}</div>
        <button onClick={callGrapphqlApi}> GRAPHQL_API 요청하기 ! </button>
        
        
        </div>

    )
}
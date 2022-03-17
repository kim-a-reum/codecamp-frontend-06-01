// import axios from 'axios'
import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'
const CREATE_BOARD =gql`
        mutation {   
            createBoard(     
                writer : "배고프당...",    
                title : "이제 곧 점심시간~",     
                contents : "123 "  ) 
            {     _id     
                number    
                message    } 
}`

export default function GraphqlMutationPage(){
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    
    const callGrapphqlApi = async () => {

            // const result = await axios.get("https://koreanjson.com/posts/2") //rest-api 방식 !! 
                const result = await callApi() // graphql -api 방식 
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
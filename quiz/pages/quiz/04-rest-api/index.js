import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
    const [data,setData] = useState("")
    async function callRestApi(){
            
            const result = await axios.get("https://koreanjson.com/posts/3")
            
                console.log(result)
                console.log(result.data.content)
                setData(result.data.content)
            
    }
    
    return(
        <div> 
        
        <div>{data}</div>
        <button onClick={callRestApi}> REST_API 요청하기 ! </button>
        
        
        </div>

    )
}
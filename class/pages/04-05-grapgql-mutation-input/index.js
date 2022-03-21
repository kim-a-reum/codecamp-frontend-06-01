import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'
const CREATE_BOARD =gql`
        mutation CreateBoard ($writer: String, $title: String ,$contents: String){ 

                createBoard(     
                writer : $writer,title : $title, contents : $contents ) 
            {     _id     
                number    
                message    } 
}`

export default function GraphqlMutationPage(){
    const[mywriter, setMyWriter] = useState("")
    const[mytitle, setMyTitle] = useState("")
    const[mycontents, setMyContents] = useState("")

    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const callGrapphqlApi = async () => {

            // const result = await axios.get("https://koreanjson.com/posts/2") //rest-api 방식 !! 
                const result = await callApi({
                    variables: { writer : mywriter , title : mytitle, contents : mycontents }
                } )// graphql -api 방식 
                console.log(result)
                console.log(result.data.createBoard.message)
                setData(result.data.createBoard.message)
            
            // 
    }
    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
        
    }
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
    }
    return(
        <div> 
        
        작성자 : <input type="text" onChange={onChangeWriter}/><br/>
        제목 : <input type="text" onChange={onChangeTitle}/><br/>
        내용 : <input type="text" onChange={onChangeContents}/><br/>
        <button onClick={callGrapphqlApi}> GRAPHQL_API 요청하기 ! </button>
        
        
        </div>

    )
}
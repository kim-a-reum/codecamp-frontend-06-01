import BoardWriteUI from "./BoardWrite.presenter"
//default 값을 받기 때문에 아무이름이나 받아도 되고 {}안써도 되는데
//  return값에만 똑같이 써주면 된다 
import {useState} from 'react'
import {useMutation } from '@apollo/client'
import { CREATE_BOARD } from "./BoardWrite.queries"
export default function BoardWrite(){
    const [isActive,setIsActive] = useState(false)
    const[mywriter, setMyWriter] = useState("")
    const[mytitle, setMyTitle] = useState("")
    const[mycontents, setMyContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const callGrapphqlApi = async () => {
    
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
        if(event.target.value !== "" && mytitle !== "" && mycontents !== ""){setIsActive(true)}
        else { setIsActive(false)}
        
    }
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
        if(mywriter !== "" &&event.target.value !== "" && mycontents !== ""){setIsActive(true)}
        else { setIsActive(false)}
    }
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
        // setMyContents는 지금 {}안의 함수가 끝나야 바뀌는 작동원리를 가지고 있다 
        // 그러니까 event.target.value로 값을 바꿔줘야댐 
        if(mywriter !== "" && mytitle !== "" && event.target.value !== ""){setIsActive(true)}
        else { setIsActive(false)}
    }

    return(
        <BoardWriteUI 
        onChangeWriter={onChangeWriter} 
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGrapphqlApi={callGrapphqlApi}
        isActive = {isActive} />
            // 객체가 만들어 진거임! 객체의 키 벨류에 함수가 들어간것.
    )
}





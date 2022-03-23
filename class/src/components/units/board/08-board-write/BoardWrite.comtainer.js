//컨테이너 컴포넌트

import BoardWriteUI from "./BoardWrite.presenter"
import {useRouter} from 'next/router'
import {useState} from 'react'
import {useMutation } from '@apollo/client'
import { CREATE_BOARD } from "./BoardWrite.queries"
import { UPDATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){
    const router = useRouter()
    const [isActive,setIsActive] = useState(false)
    const[mywriter, setMyWriter] = useState("")
    const[mytitle, setMyTitle] = useState("")
    const[mycontents, setMyContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)


    const OnClickUpdate = async () => {
        //수정하기 함수입니다
        const result = await updateBoard({ 
                variables: { number: Number(router.query.mynumber) , writer : mywriter , title : mytitle, contents : mycontents }
        })
        alert("게시글 수정에 성공했어요! ")
        router.push(`/08-05-boards/${router.query.mynumber}`)

    }
    const OnClickCreate = async () => {
    //등록하기 함수입니다
    const result = await callApi({
                    variables: { writer : mywriter , title : mytitle, contents : mycontents }
                } )
                // console.log(result)
                // console.log(result.data.createBoard.message)
                // setData(result.data.createBoard.message)
                alert("게시글 등록에 성공했어요! ")
                router.push(`/08-05-boards/${result.data.createBoard.number}`)
                
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

        if(mywriter !== "" && mytitle !== "" && event.target.value !== ""){setIsActive(true)}
        else { setIsActive(false)}
    }

    return(
        <BoardWriteUI 
        onChangeWriter={onChangeWriter} 
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        OnClickCreate={OnClickCreate}
        OnClickUpdate = {OnClickUpdate}
        isActive = {isActive}
        isEdit={props.isEdit} />
        //얘도 new에서 받은거기 때문에 !!!! 

    )
}





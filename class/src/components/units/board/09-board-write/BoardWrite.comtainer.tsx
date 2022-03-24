//컨테이너 컴포넌트

import BoardWriteUI from "./BoardWrite.presenter"
import {useRouter} from 'next/router'
import { ChangeEvent, useState} from 'react'
import {useMutation } from '@apollo/client'
import { CREATE_BOARD } from "./BoardWrite.queries"
import { UPDATE_BOARD } from "./BoardWrite.queries"
import { IBoardWriteProps } from "./BoardWrite.types"
import { IMyVariables } from "./BoardWrite.types"

export default function BoardWrite(props :IBoardWriteProps){
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
        
        const myVariables: IMyVariables = {number: Number(router.query.mynumber)}
        if(mywriter !== "") myVariables.writer = mywriter
        // 만약에 mywriter라는 스테이트가 비어있지 않으면 aaa의 writer라는 키에 mywriter를 넣어줘 , 한줄일때만 if문의 중괄호를 생략 가능 
        if(mytitle!== "") myVariables.title = mytitle
        if(mycontents !== "") myVariables.contents = mycontents
        
        
        
        const result= await updateBoard({ 
                variables: myVariables

        })
        alert("게시글 수정에 성공했어요! ")
        console.log(result)
        router.push(`/09-03-typescript/${router.query.mynumber}`)

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
                router.push(`/09-03-typescript/${result.data.createBoard.number}`)
                
                // 
    }
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value)
        if(event.target.value !== "" && mytitle !== "" && mycontents !== ""){setIsActive(true)}
        else { setIsActive(false)}
        
    }
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value)
        if(mywriter !== "" &&event.target.value !== "" && mycontents !== ""){setIsActive(true)}
        else { setIsActive(false)}
    }
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
        isEdit={props.isEdit} 
        data = {props.data}/>
        //얘도 new에서 받은거기 때문에 !!!! 
        // 데이터는 edit에서 새로 써주고 받았다!! 

    )
}





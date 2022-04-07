import {ChangeEvent, useRef, useState} from 'react'
import {useMutation , gql} from '@apollo/client'
import { checkFileValidation } from '../../src/commons/libraries/validation'
import { IMutation, IMutationUploadFileArgs } from '../../src/commons/types/generated/types'
import { LikeFilled} from '@ant-design/icons'

const CREATE_BOARD =gql`
        mutation createBoard ($createBoardInput:CreateBoardInput!){ 
                createBoard(createBoardInput:$createBoardInput) 
            {     _id     
                writer
                title
                contents
                
            } 
}`
const UPLOAD_FILE =  gql`
mutation uploadFile($file:Upload!){
    uploadFile(file:$file){
        url

    }
}

`



export default function GraphqlMutationPage(){
    const[mywriter, setMyWriter] = useState("")
    const[mytitle, setMyTitle] = useState("")
    const[mycontents, setMyContents] = useState("")
    const[mypassword, setMyPassword] = useState("")
    const[hide,setHide] = useState(true)
    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const fileRef = useRef<HTMLInputElement>(null)
    const [imageUrl,setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)

    const createBoardImg = async () => {

                const result = await callApi({
                    variables: { createBoardInput : {
                        writer : mywriter,
                        title : mytitle,
                        contents : mycontents,
                        password : mypassword,
                        images : [imageUrl],
                    
                    } }
                } )
                
                setData(result.data.createBoard.message)
            
            // 
    }
    const onChangeWriter = (event : ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value)
        
    }
    const onChangePassword = (event : ChangeEvent<HTMLInputElement>) => {
        setMyPassword(event.target.value)
        
    }
    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value)
    }
    const onChangeContents = (event : ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value)
    }


    const onChangefile = async (event : ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        
        const isValid = checkFileValidation(file)
        if(!isValid) return
        console.log("여기까진 오케이")
        try{
            const result = await uploadFile({
                variables: {file}
            })
            console.log(result.data?.uploadFile.url)
            setHide(false)
            setImageUrl(result.data?.uploadFile.url)
        } catch(error){
            alert("뭔가가 잘못되었다")
        }
    }
    const onClickImage = ()=> {
        fileRef.current?.click();

    }

    return(
        <div> 
        
        작성자 : <input type="text" onChange={onChangeWriter}/><br/>
        비밀번호 : <input type="password" onChange={onChangePassword}/><br/>
        제목 : <input type="text" onChange={onChangeTitle}/><br/>
        내용 : <input type="text" onChange={onChangeContents}/><br/>
        <>
        <LikeFilled style={{width:"200px", height:"200px"}} onClick={onClickImage}></LikeFilled>
        <input style={{display: "none"}} type = "file" onChange={onChangefile} multiple
        ref={fileRef}/>
        <img style={{display: hide === false ? "inline" : "none" }}src={`https://storage.googleapis.com/${imageUrl}`}/>
        
        </>
        <button onClick={createBoardImg}> 저장하기</button>
        
        
        </div>

    )
}
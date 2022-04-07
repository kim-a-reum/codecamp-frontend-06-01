import {ChangeEvent, useRef, useState} from 'react'
import {useMutation , gql} from '@apollo/client'
import { checkFileValidation } from '../../src/commons/libraries/validation'
import { IMutation, IMutationUploadFileArgs } from '../../src/commons/types/generated/types'

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
    uploadFile(file: $file){
        url

    }
}

`

export default function GraphqlMutationPage(){
    const[mywriter, setMyWriter] = useState("")
    const[mytitle, setMyTitle] = useState("")
    const[mycontents, setMyContents] = useState("")
    const[mypassword, setMyPassword] = useState("")

    const [data,setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const fileRef = useRef<HTMLInputElement>(null)
    const [imageUrl,setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)

    const callGrapphqlApi = async () => {

                const result = await callApi({
                    variables: { createBoardInput : {
                        writer : mywriter,
                        title : mytitle,
                        contents : mycontents,
                        password : mypassword,
                        images : [imageUrl],
                    
                    } }
                } )
                console.log(result)
                console.log(result.data.createBoard.message)
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
        const myfile = event.target.files?.[0]
        console.log(myfile)
        const isValid = checkFileValidation(myfile)
        if(!isValid) return

        try{
            const result = await uploadFile({
                variables: {file: myfile}
                // 키와벨류같으면 나중에 한줄로 쓰고 생략해줘도댐 
            })
            console.log(result.data?.uploadFile.url)
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
        <div>이미지 업로드 연습하기</div>
        <div style={{ width : "100px", height: "100px", backgroundColor: "pink", border: "none"}}
        onClick={onClickImage}>
            이미지선택
        </div>
        <input style={{display: "none"}} type = "file" onChange={onChangefile } multiple
        ref={fileRef}/>
        <img src={`https://storage.googleapis.com/${imageUrl}`}/>
        
        </>
        <button onClick={callGrapphqlApi}> GRAPHQL_API 요청하기 ! </button>
        
        
        </div>

    )
}
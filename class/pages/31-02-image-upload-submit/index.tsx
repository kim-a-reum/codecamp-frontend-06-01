import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"


const UPLOAD_FILE =  gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file: $file){
            url

        }
    }

`
export const CREATE_BOARD =gql`
        mutation CreateBoard ($createBoardInput: CreateBoardInput!){ 
createBoard(createBoardInput: $createBoardInput) 
            {     _id     
                
                  } 
}`

export default function ImageUploadPreviewPage(){
    const [imgUrl,setImgUrl] = useState("")
    const [file1,setFile1] =useState<File>()
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)
    const [createBoard] = useMutation(CREATE_BOARD)
    const onChangeFile = (event : ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files[0]
        if(!file){ 
            alert("파일이 없어요!");
        return;
    }
    // 자바스크림트 내에서 파일을 읽어서 미리보기 가능하게 하는 기능을 써보자!
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data)=>{
        // 타입이 스트링일때만 실행시켜줘! 
        if(typeof data.target?.result === "string"){
            console.log(data.target?.result)
            setImgUrl(data.target?.result)
            // 파일도 같이 저장해준다
            setFile1(file)
        }
        }
    }
    const onClickSubmit = async()=>{
        const result1 = await uploadFile({
            variables: {file: file1}
        })
        const imageUrl = result1.data.uploadFile.url
        const result2 = await createBoard({
            variables: { 
                createBoardInput:{
                    writer: "아름",
                    password:"1234",
                    title:"안녕하세요",
                    contents:"머리아파요 두통약좀 주세요",
                    images: [imageUrl]
                }
             }
        } )
        console.log(result2.data.createBoard._id)

    }

        return(

            <div>
                <input type="file" onChange={onChangeFile}/>
                <img src={imgUrl}/>            
                <button onClick={onClickSubmit}>게ㅅㅣ글 등록하기</button>
            </div>
        )
}
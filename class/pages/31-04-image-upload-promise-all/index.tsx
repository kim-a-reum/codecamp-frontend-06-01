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
    const [imgUrls,setImgUrls] = useState(["","",""])
    const [files,setFiles] =useState<File | undefined[]>([undefined,undefined,undefined])
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)
    const [createBoard] = useMutation(CREATE_BOARD)
    
    
    const onChangeFile =(number)=>(event : ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files[0]
        if(!file){ 
            alert("파일이 없어요!");
        return;
    }
    // 자바스크림트 내에서 파일을 읽어서 미리보기 가능하게 하는 기능을 써보자!
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data)=>{
        // 차입이 스트링일때만 실행시켜줘! 
        if(typeof data.target?.result === "string"){
            // 미리보기만들기
            const tempUrls = [...imgUrls]
            tempUrls[number] = data.target?.result
            setImgUrls(tempUrls)
            // 업로드할 데이터 배열 만들기 
            const tempFiles = [...files]
            tempFiles[number] = file
            setFiles(tempFiles)
        }
        }
    }
    const onClickSubmit = async()=>{
        // Result안에 배열로 결과가 들어가 있겠지 
        const results = await
        Promise.all(
            files.map((el)=> el && uploadFile({variables:{file:el}}))
            )
        // files.map((el)=>{
        //     // 파일이 없을수도 있으니까 조건을 걸어주자 
        //     // 1번째방법
        //     // if(el){
        //     //     return uploadFile({variables: {file: el}})
        //     // }else{
        //     //     return undefined
        //     // }
        //     // 2번째방법
        //     // return el ? uploadFile({variables: {file: el}}) : undefined
        //     // 3번째방법
        //     return el && uploadFile({variables: {file: el}})
        // })
        const resultUrls = results.map((el)=>{
            return el.data ? el?.data.uploadFile.url : ""
            // el.data가 있으면 url을 뽑고 업스면
        })

        
        const result2 = await createBoard({
            variables: { 
                createBoardInput:{
                    writer: "아름",
                    password:"1234",
                    title:"안녕하세요",
                    contents:"머리아파요 두통약좀 주세요",
                    images: resultUrls
                }
             }
        } )
        console.log(result2.data.createBoard._id)

    }

        return(

            <div>
                <input type="file" onChange={onChangeFile(0)}/>
                <input type="file" onChange={onChangeFile(1)}/>
                <input type="file" onChange={onChangeFile(2)}/>
                
                <img src={imgUrls[0]}/>   
                <img src={imgUrls[1]}/>   
                <img src={imgUrls[2]}/>            
                <button onClick={onClickSubmit}>게ㅅㅣ글 등록하기</button>
            </div>
        )
}
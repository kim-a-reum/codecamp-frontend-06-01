import { ChangeEvent, useRef, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import { checkFileValidation } from "../../src/commons/libraries/validation"





const UPLOAD_FILE =  gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file: $file){
            url

        }
    }

`

export default function ImageValidationPage(){
    const fileRef = useRef<HTMLInputElement>(null)
    const [imageUrl,setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation,"uploadFile">,IMutationUploadFileArgs>(UPLOAD_FILE)

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

    return (
        <>
        <div>이미지 업로드 연습하기</div>
        <div style={{ width : "100px", height: "100px", backgroundColor: "pink", border: "none"}}
        onClick={onClickImage}>
            이미지선택
        </div>
        <input style={{display: "none"}} type = "file"onChange={onChangefile} multiple
        ref={fileRef}/>
        <img src={`https://storage.googleapis.com/${imageUrl}`}/>
        </>
    )
}



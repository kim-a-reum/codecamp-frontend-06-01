import { ChangeEvent, useState } from "react"

export default function ImageUploadPreviewPage(){
    const [imgUrl,setImgUrl] = useState("")
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
        // 차입이 스트링일때만 실행시켜줘! 
        if(typeof data.target?.result === "string"){
            console.log(data.target?.result)
            setImgUrl(data.target?.result)
        }
        }
    }

        return(

            <div>
                <input type="file" onChange={onChangeFile}/>
                <img src={imgUrl}/>            
            </div>
        )
}
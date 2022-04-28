import axios from "axios"
import { getAccessToken } from "../../src/commons/libraries/getAccessToken"

export default function OpengraphPreviewPage(){

    const onClickOpengraph = async()=>{
        const result = axios.get("https://www.gmarket.co.kr")
        console.log(result.data)
    }

    return (
<>
        <h1>사이트 미리보기 연습 </h1>
        <button onClick={onClickOpengraph}>미리보기 실행 ! </button> 

</>
    )
}
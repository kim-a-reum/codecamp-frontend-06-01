import axios from "axios"
import { useEffect, useState } from "react"

export default function OpenApiWithUseEffectPage(){
    const [dogUrl, setDogUrl] = useState("")
    // 이미지 주소의 초깃값을 담아준거다 

    useEffect(()=>{
        const aaa = async () =>{  
            // async를쓰기 위해서 함수하나 만들어서 넣어준거다 

            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDogUrl(result.data.message)
            // set을 썼을때 useffect쓰는건 리렌더가 한번 더 되게 때문에 좋진 않다 
        }
        aaa();
    },[]);

        return(
            <div>
                <div>오픈 API연습!!</div>
                <img src={dogUrl}></img>

            </div>
        ) 

}
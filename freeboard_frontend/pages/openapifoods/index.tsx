import styled from "@emotion/styled";
import axios from "axios"
import { useEffect, useState } from "react"



const Foodbox = styled.img`
    width: 500px;
    height: 500px;

`

export default function TodayFoods(){

    const [foodUrl, setFoodUrl] = useState("")
    // 이미지 주소의 초깃값을 담아준거다 

    useEffect(()=>{
        const aaa = async () =>{  
            // async를쓰기 위해서 함수하나 만들어서 넣어준거다 

            const result = await axios.get("https://foodish-api.herokuapp.com/api/")
            console.log(result.data)
            setFoodUrl(result.data.image)
            // set을 썼을때 useffect쓰는건 리렌더가 한번 더 되게 때문에 좋진 않다 
        }
        aaa();
    },[]);

    return (
        <>
        <div>여기야여기</div>
        <Foodbox src={foodUrl}></Foodbox>
        </>
    )


}



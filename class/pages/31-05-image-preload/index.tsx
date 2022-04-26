import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage(){
    const[isLoaded, setisLoaded] = useState(false)
    const [imgTag,setImgTag] = useState<HTMLImageElement>()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const img = new Image() // 이미지를 자동으로 생성해주는 함수
        img.src = "https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg"
        // 이미지 태그가 이미지주소에서 다운 받는다 
        img.onload = ()=>{
            setImgTag(img)
            // t이미지가 다운받아진 상태가 들어가 있다 
        }
    },[])

    const onClickPreload = ()=>{
        if(imgTag)
        divRef.current?.appendChild(imgTag)
        // document.getElementById("aaa")?.appendChild(imgTag) 
        // 이 방법도 있지만 쓰지 않는다 

    }

    const onClickLoad = ()=>{
        setisLoaded(true)


    }
    return (
        <div>
            <div ref={divRef}id="aaa"></div>
            <button onClick={onClickPreload}>이미지 프리로드</button>
            =====================================
           {isLoaded && <img src="https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg"></img>}
            <button onClick={onClickLoad}>이미지 일반로드</button>
        </div>
    )
}
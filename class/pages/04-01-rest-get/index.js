import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
    const [data,setData] = useState("")
    async function callRestApi(){
            //확실하게 화살표 함수로 고쳐주자 //
            // axios 쓰려면 expot해서 써야하는데 package.json랑 node)modules 가보면 axios 깔려있는거 확인가능 
            const result = await axios.get("https://koreanjson.com/posts/2")
            //get은 메서드, /posts/2는 엔드포인트 //
                console.log(result)
                console.log(result.data.title)
            // await 써줄때는 꼭 짝궁 axios 까지 같이 써줘야한다
                setData(result.data.title)
            // 뽑은 타이들을 setdata에 적용해줘야 "" 빈값이었다가 저장이 되게 된다 
    }
    
    return(
        <div> 
        {/* //JSX는 하나로 묶어서 보내주어야 하는것 꼭 기억하자 ! // */}
        <div>{data}</div>
        <button onClick={callRestApi}> REST_API 요청하기 ! </button>
        
        
        </div>

    )
}
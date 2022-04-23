import axios from "axios"

export default function CallbackPromiseAsyncawaitPage(){
    const onClickCallback = ()=>{
        const aaa = new XMLHttpRequest()
        aaa.open("get","http://numbersapi.com/random?min=1&max=200")
        aaa.send()
        aaa.addEventListener("load",(res)=>{
          const num = res.target.response.split(" ")[0] // 랜덤숫자 

          const bbb = new XMLHttpRequest();
          bbb.open("get", `http://koreanjson.com/posts/${num}`)
          bbb.send()
          bbb.addEventListener("load",()=>{
             const userId = res.target.response.UserId
                // 내가 쓴 모든글 가져오기 
              const ccc = new XMLHttpRequest()
              ccc.open("get",`http://koreanjson.com/posts?userId=${userId}`)
              ccc.send()
              ccc.addEventListener("load", (res)=>{
                  console.log(res); // 최종 결과값 
              })
            })
        })

    }
    // 콜백 지옥을 해결하기 위해 프로미스가 나왔다 
    // async await가 없던 시절에 프로미스로 만들어진게 axios의 리턴 타입으로 promise가 나옴 
    // 성고해서 받는게 then 실패하면 캐치 프로미스 안에 resolve,reject
    // 프로미스는 시간이 걸리는 작업할때 에이피아잉 ㅛㅇ청할때 

    // new Promise((resolve,reject)=>{
    //     // 외부 요청 코드
    //     // 성공했을때
    //     resolve("몰리")
    //     // 실패했을때
    //     reject("에러")

    // }).then((res)=>{}).catch(err=>{})
    const onClickPromise = ()=>{
        axios.get("http://numbersapi.com/random?min=1&max=200").then((res)=>console.log(res))
    }
    const onClickAsyneawait = ()=>{

    }


    return(<>
        <button onClick={onClickCallback}>callback 요청하기 </button>
        <button onClick = {onClickPromise}> promise요청하기 </button>
        <button onClick ={onClickAsyneawait}>asyncwait요청하기 </button>
    </>
    )
}
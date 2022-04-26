export default function PromiseAllPage(){
    
    const onClickPromise = async ()=>{
        // 시간을 확인하는 방법 ! newdate해서 빼도 된다 
        // performance.now()
        console.time("promise")
        const result1 = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("https://dog1.jpg")
            },3000)
        })
        console.log(result1)

        const result2 = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("https://dog2.jpg")
            },1000)
        })
        console.log(result2)

        const result3 = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("https://dog3.jpg")
            },2000)
        })
        console.log(result3)
        console.timeEnd("promise")

    }
    // 하나하나씩 확인하는 방법
    // const onClickPromiseAll =()=>{
    //     console.time("Promiseall")
    //     Promise.all([
    //         // 안에는 promise들의 배열이 들어간다. 동시에 실행시키고 싶은 promise들을 넣어줘! 라는 뜻이다 
    //         new Promise((resolve, reject)=>{
    //             setTimeout(()=>{
    //                 resolve("https://dog1.jpg")
    //             },3000)
    //         }),
    //         new Promise((resolve, reject)=>{
    //             setTimeout(()=>{
    //                 resolve("https://dog2.jpg")
    //             },1000)
    //         }),
    //         new Promise((resolve, reject)=>{
    //             setTimeout(()=>{
    //                 resolve("https://dog3.jpg")
    //             },2000)
    //         })

    //     ])
    //     console.timeEnd("Promiseall")
        
    // }
    // 한방에 확인하는 방법

    const onClickPromiseAll = async()=> {


        console.time("Promiseall")
        const result = await Promise.all(
            
            ["https://dog1.jpg","https://dog2.jpg","https://dog3.jpg"].map(
                el=> new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve(el)
                    },3000)
                }))
                )
                console.log(result)
                console.timeEnd("Promiseall")
                
            }
                // 
                return(
                    <div>
            <button onClick={onClickPromise}>Promise 연습하지 !!</button>
            <button onClick={onClickPromiseAll}>Promise.all 연습하지 !!</button>

        </div>
    )
}
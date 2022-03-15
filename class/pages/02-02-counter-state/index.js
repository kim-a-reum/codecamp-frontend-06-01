import {useState} from 'react'
// 리액트에서 제공해주는 기능을 불러와야댐 

export default function CounterStatetPage(){


        const [ count, setCount] = useState(0)

        function counter(){
            setCount(count + 1)
                // 여기 괄호 안에 넣는 값으로 바뀐다 ! 
    
    
        }

    
    
        return (
            <div>
    
            <div>{count}</div>
            {/* 초기값을 0으로 줬으니까 {count}로 쓰면 되징  */}
            <button onClick = {counter}>카운트 올리기 !! </button>
            </div>
    
        )
    
        }



// 안되는 사례 
//         import { useState } from 'react'

// export default function CounterStatePage(){
//     let count = 0

//     function counter(){
//         count = count + 1
//         console.log(count)
//     }

//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={counter}>카운트 올리기!!!</button>
//         </div>
//     )
// }
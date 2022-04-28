import { useCallback, useMemo, useState } from "react"
import MemoizationPresenterPage from "./presneter"

export default function MemoizationContainerPage(){

    console.log("컨테이너 렌더")
    let countLet = 0
    const [countState, setCountState] = useState(0)
    
    
    const aaa = useMemo(() => Math.random(),[])
    console.log(aaa)

    const onClickCountLet = useCallback(()=>{
        console.log(countLet +1)
        countLet += 1
    },[])
     
    const onClickCountState = useCallback(()=>{
        // setCountState(countState + 1)
        setCountState((prev)=>prev+1)
        console.log(countState)
        },[])
        

    return (
        <div>
            <div>=================================</div>
            <h1>컨테이너 부분</h1>
            <div>countLet: {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) + 1</button><br/><br/>

            <div>countState: {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 </button>
            {/* <button onClick={()=>{setCountState(prev => prev+1)}}>카운트(state) +1 </button> */}
            {/* 이렇게 써도 되긴함 */}
            <div>=================================</div>
            <MemoizationPresenterPage
            
            />
        </div>
    )
}
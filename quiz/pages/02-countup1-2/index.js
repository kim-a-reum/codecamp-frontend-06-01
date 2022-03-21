import { useState } from "react"


export default function CountPage(){

    const [count, setCount] = useState(0)
    function CountUp(){
        
        setCount(count + 1)
    }
    
    
    
    
    
    return(
        <div>
            <div>{count}</div>
            <button onClick = {CountUp} >카운트증가</button>

            
        
        </div>
    )

}
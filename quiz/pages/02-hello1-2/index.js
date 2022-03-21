import { useState } from "react"


export default function HelloPage(){

   
    const [hello, changeHello]  = useState("안녕하세요")
    function HelloButton(){
        changeHello("반갑습니다")
    }




return(
    <div>
        
        
        <button onClick = {HelloButton}> {hello} </button>

    </div>

)
}

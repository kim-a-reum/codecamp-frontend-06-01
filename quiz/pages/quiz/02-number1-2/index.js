import {useState} from "react"

export default function NumberPage(){


    const[number,newNumber] = useState("000000")
    function ChangeNumber(){
        
        newNumber(String(Math.floor(Math.random() * 1000000)).padStart(6,"0"))

    }


    return(
        <div>

        <div>{number}</div>
        <button onClick = {ChangeNumber}>인증번호전송</button>

        </div>


    )




}
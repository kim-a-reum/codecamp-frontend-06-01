

export default function NumberPage(){


    
    function ChangeNumber(){
    
        const result = 
        String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("Number").innerText = result

    }


    return(
        <div>

        <div id = "Number">000000</div>
        <button onClick = {ChangeNumber}>인증번호전송</button>

        </div>


    )




}
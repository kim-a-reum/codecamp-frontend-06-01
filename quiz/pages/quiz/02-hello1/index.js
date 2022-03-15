


export default function HelloPage(){

        function HelloButton(){
            document.getElementById("Hello").innerText = "반갑습니다."
        }




    return(
        <div>
            
            
            <button onClick = {HelloButton} id = "Hello" >안녕하세요</button>

        </div>

    )
}

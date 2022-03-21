export default function CountPage(){


    function CountUp(){
        const result =         
        Number(document.getElementById("Number").innerText) + 1
        document.getElementById("Number").innerText = result

    }
    
    
    
    
    
    return(
        <div>
            <div id = "Number">0</div>
            <button onClick = {CountUp} >카운트증가</button>

            
        
        </div>
    )

}
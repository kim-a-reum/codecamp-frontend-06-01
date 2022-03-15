export default function CounterDocumentPage(){
// 페이지를 구성하는 하나의 컴포넌트를 생성

    function counter(){
        
        const result =
        Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result

    }
    // 버튼을 클릭했을때 실행되는함수를 생성 


    return (
        <div>

            <div id = "count">0</div>
            <button onClick = {counter}>카운트 올리기 !! </button>

{/* 온클릭 대문자 잊지말아라 */}

        </div>

        // 내보낼때 껍데기 하나를 묶어서 내보내줘야함 그냥 <> 해도됨 fragment 
    )

}
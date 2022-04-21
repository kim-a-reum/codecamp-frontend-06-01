// setTimeout(()=>{
//  console.log('안녀앟세요!')
// ,1000})

// setInterval(()=>{
//     document.getElementById("timer")?.innerText = "59:30"
// },1000)
// 시간이 걸리는 것들은 바로 실행되지 않고, 다른 실행공간에 들어가서 실행된다
// 자바스크립트의 동작원리를 이해해라 




export default function EventLoopPage(){
    const onClickTimer = ()=>{
        console.log("===========시작!=============")
        setTimeout(()=>{
            console.log("1초 뒤에 실행됩니다 ! ")
        },1000)
        let sum = 0;
        for (let i = 0; i <= 9000000000; i += 1) {
          sum = sum + 1;
        }
        console.log(sum)
    }
    return (
        <button onClick={onClickTimer}>setTimeout 실행시키기 ! </button>
    )


}
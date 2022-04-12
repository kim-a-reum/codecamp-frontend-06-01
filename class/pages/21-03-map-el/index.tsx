export default function MapElPage(){
// 1. 기본방법 
["철수", "영희", "훈이"].forEach((el,index)=>{
    console.log("el:",el)
    console.log("index:",index)

});

// 2. 매개변수 변경한 방법
["철수", "영희", "훈이"].forEach((asdf,qwer)=>{
    console.log("asdf:",asdf)
    console.log("qwer:",qwer)
    
});

// 2. 함수 선언식 방법
["철수", "영희", "훈이"].forEach(function(asdf,qwer){
    console.log("asdf:",asdf)
    console.log("qwer:",qwer)
    
});

// 4. el과 index 바꾸기
["철수", "영희", "훈이"].forEach((index,el)=>{
    console.log("el:",el)
    console.log("index:",index)
    // console.log("k:",k)

});

    return <div>el 알아보기 !</div>
}
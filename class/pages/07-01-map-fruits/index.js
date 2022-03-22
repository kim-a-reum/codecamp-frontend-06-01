//여기는 리렌더링 되어도 새로 안만들어짐 리렌더할때 use애들만 새로 안만들어짐 리렌더 되어도 안없어지는 애들이라서 !.. 함수들도 다 새로 만들어짐(메모이제이션때 함수들도 안사라지게 만들수 있음 )

const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];



export default function MapFruitsPage(){
    // const aaa = [ <div>1 레드향</div> ,<div>2 샤인머스캣</div>  ,<div>3 산청딸기</div>]

    // const bbb = ["나의레드향","나의 샤인머스캣","나의 산청딸기"].map((el)=>(<div>{el}</div>))
    // 배열안에 요소가 있을뿐 
    // 데이터인데 하드코딩한 상수들은 이렇게 대문자로쓴다. 그리고 위쪽에 선언을 해준다 (위로 FRUITS선언 빼버림, 혹은 다른파일로 만들어버림 )
    //el을 왜 적어주겠어 이거 까먹지말고 화살표 함수부분에 잘쓰자 
    //얘네도 리렌더 문제가 있기 때문에 굉장히 비효율적이다 
    //<div> 1 레드향 </div> 이런식이댱 
    const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>) )

    return(
        <>
        
            <div>{ccc}</div>
            <div>
                {FRUITS.map ((el) =>
                    (<div> {el.number} {el.title}</div>) 
                )}
            </div> 
            {/* // 이 방식을 더 많이 쓴다 위에서 아래로 내려갈때 쭉 읽힐수 있겠끔 // */}


        </>
    )



}
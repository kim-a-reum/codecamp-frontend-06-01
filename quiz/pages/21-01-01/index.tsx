// import Presenter from "../../src/components/units/21-01-01/presenter";

// // 1-1번문제 container 부분
// export default function Container() {
//     return (
//       <>
//         {Presenter({ child :"철수" })}
//       </>
//     );
//   }
  
  


import Presenter from "../../src/components/units/21-01-01/presenter";

// 1-2번문제 container 부분
export default function Container() {
    return (
      <>
        {Presenter ( {child :"철수", age: "13"})}
      </>
    );
  }
  
// 1-3 문제
  ["철수", "영희", "훈이", "맹구"].map((index,el) => {
	console.log(`영희는 ${el}번째 칸에 들어있습니다.`)
})

// 1-4 문제
const [state, setState] = useState(0)

setState(qwer => qwer + 1)
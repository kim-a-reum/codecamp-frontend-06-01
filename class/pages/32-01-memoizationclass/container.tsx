import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presneter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링됩니다 ");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1)
    // setCountState(countState + 1)
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 값 저장할 수 있었으니까, 함수도 저장가능하지 않을까?
  // useCallback 만들어보기 !

  const bbb = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []); // bbb는 usecallback함수가 된것 !

  return (
    <div>
      <div>=================================</div>
      <h1>여기는 컨테이너</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1</button>
      <br />
      <br />

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 </button>
      {/* <button onClick={()=>{
                setCountState(prev => prev+1)
            }}>카운트(state) +1 </button> */}
      {/* 이렇게 써도 되긴함 */}
      <div>=================================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}

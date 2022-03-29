import { useState } from "react";

export default function statePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // setCount(count + 2);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div> 현재 카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 올리기 </button>
    </>
  );
}

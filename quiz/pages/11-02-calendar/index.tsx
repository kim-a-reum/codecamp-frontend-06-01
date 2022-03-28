import { Calendar } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

export default function onPanelChange() {
  const [date, setDate] = useState("");
  function onSelect(value) {
    setDate(value.format().slice(0, 10));
    // setDate(value.format().slice(6, 7)); 월만 나타낸 부분입니다
  }

  return (
    <>
      <MyCalendar fullscreen={false} onSelect={onSelect} />
      <div>{date}</div>
    </>
  );
}

// ----------내가 고민한 부분 --------
// setDate(value.format("YYYY-MM-DD"));
// 왜 꼭 이렇게 담아주어야 하는거지 ?
// setDate(value); 이렇게 쓰면 나오는 에러메시지를 자주 읽는 습관을 들이자. 값을 못읽겠대. 왜? 하위객체가 많아서!
// 하위집합을 렌더링 하고 싶으면 배열을 써야한단다
// console.log(value._isAMomentObject); 그럼 이렇게 하나씩 찍어보자
// console.log(value._d); //내가 원하는 값을 찾았다 근데 배열에 넣으라네.... 데이터가 맞나보다

// 이 방법은 왜 안되는지 궁금하다 배열에 담아주래서 담았는뎅!?
// const realdate = [];
// realdate.push(value._d);
// setDate(realdate);

//그리고 getDate로 그러면 value._d를 쪼개서 담으면 안되는건가 ?
// const realdate = [value._d];
// const newdate = realdate.getFullyear() + realdate.getMonth();
// setDate(newdate); 좋은 시도였지만 실패..~ 근데 갑자기 ant.design에 밑에 데이터를 담아주는 방식이 있다
// 나는 왜 moment를 빼야하는가 ?!
//

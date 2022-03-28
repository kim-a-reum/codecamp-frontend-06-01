import { useState } from "react";
import { Rate } from "antd";
import styled from "@emotion/styled";

const MyStar = styled(Rate)`
  color: pink;
`;
export default function LibraryStarPage() {
  const [value, setValue] = useState(2);

  // state = {
  //   value: 3,
  // }; //얘를 위에 클래스형에서 함수형으로 바꿔준거야

  const handleChange = (value: number) => {
    // this.setState({ value });
    setValue(value);
  };

  return (
    <>
      <MyStar onChange={handleChange} value={value} />
      {/* //자신을 감싸고 있는 가장 가까운 중괄호를 가르키기 땜ㄴ에 위에 const value를 가져오게 되고 !
      스코프체인원리에 대해 제대로 이해하고 있자 !  */}
    </>
  );
}

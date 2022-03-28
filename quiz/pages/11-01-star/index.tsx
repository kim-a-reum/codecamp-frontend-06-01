import { MouseEvent, useState } from "react";
import { message, Rate } from "antd";
import styled from "@emotion/styled";

const MyStar = styled(Rate)`
  color: red;
`;

export default function LibraryStarPage() {
  const starvalue = ["1점이다", "2점이다", "3점이다", "4점이다", "5점이다"];

  const [value, setValue] = useState(2);

  const handleChange = (value: number) => {
    setValue(value);
    alert(value + "점을 주셨습니다");
  };

  return (
    <>
      <MyStar onChange={handleChange} value={value} /> <br />
      <span>{starvalue[value - 1]}</span>
    </>
  );
}

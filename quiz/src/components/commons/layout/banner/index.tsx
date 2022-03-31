import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background-color: #e0a7ba;
  height: 600px;
`;
const Picture1 = styled.div`
  background-image: url("../../../../picture/루피공항도둑.png");
  background-position: center;
  height: 450px;
`;
const Picture2 = styled.div`
  background-image: url("../../../../picture/루피기영이.png");
  background-position: center;
  height: 450px;
`;
const Picture3 = styled.div`
  background-image: url("../../../../picture/루피대머리.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture4 = styled.div`
  background-image: url("../../../../picture/루피담배.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture5 = styled.div`
  background-image: url("../../../../picture/루피물병.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture6 = styled.div`
  background-image: url("../../../../picture/루피물음.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture7 = styled.div`
  background-image: url("../../../../picture/루피요리사.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture8 = styled.div`
  background-image: url("../../../../picture/루피피카츄.jpeg");
  background-position: center;
  height: 450px;
`;
const Picture9 = styled.div`
  background-image: url("../../../../picture/루피멋부림.jpeg");
  background-position: center;
  height: 450px;
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Wrapper>
      {" "}
      Hello ! This is banner , right?
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <Picture1 />
          <Picture2 />
          <Picture3 />
          <Picture4 />
          <Picture5 />
          <Picture6 />
          <Picture7 />
          <Picture8 />
          <Picture9 />
        </Slider>
      </div>
    </Wrapper>
  );
}

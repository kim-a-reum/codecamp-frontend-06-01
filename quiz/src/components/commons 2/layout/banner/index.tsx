import styled from "@emotion/styled";
import React, { Component } from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  background-color: #e0a7ba;
  height: 300px;
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
export default function LayoutBanner() {
  return (
    <Wrapper>
      {" "}
      Hello ! This is banner , right?
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

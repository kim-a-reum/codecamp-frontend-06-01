import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
height: 220px;

  
`;
const MySlider = styled(Slider)`
  height: 190px;
`;

const SliderItem1 = styled.div`
  background-color: red;
  height: 220px;
  
`;
const SliderItem2= styled.div`
  background-color: orange;
  height: 220px;
`;
const SliderItem3 = styled.div`
  background-color: yellow;
  height: 220px;
`;
const SliderItem4 = styled.div`
  background-color: yellowgreen;
  height: 220px;
`;
const SliderItem5 = styled.div`
  background-color: skyblue;
  height: 220px;
`;
const SliderItem6 = styled.div`
  background-color: purple;
  height: 220px;
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return(
    <>
    <Wrapper>

    <div>
        <MySlider {...settings}>
          <div>
            <SliderItem1>1</SliderItem1>
          </div>
          <div>
            <SliderItem2>2</SliderItem2>
          </div>
          <div>
            <SliderItem3>3</SliderItem3>
          </div>
          <div>
            <SliderItem4>3</SliderItem4>
          </div>
          <div>
            <SliderItem5>3</SliderItem5>
          </div>
          <div>
            <SliderItem6>3</SliderItem6>
          </div>
        </MySlider>
    </div>
    </Wrapper>
          </>
          ) 
}

import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
height: 200px;
width: 1600px;


  
`;
const MySlider = styled(Slider)`
  height: 170px;
`

const SliderItem1 = styled.div`
background-color: skyblue;
  background-position: 30%;
  height: 200px;
  
`;
const SliderItem2= styled.div`
background-color: blue;
  background-position: 80%;
  height: 200px;
`;
const SliderItem3 = styled.div`
background-color: pink;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 200px;
`;
const SliderItem4 = styled.div`
background-color: lightcoral;
  background-position: 50%;
  height: 200px;

`;


export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return(
    <>
    <Wrapper>

    <div>
        <MySlider {...settings}>
          <div>
            <SliderItem1></SliderItem1>
          </div>
          <div>
            <SliderItem2></SliderItem2>
          </div>
          <div>
            <SliderItem3></SliderItem3>
          </div>
          <div>
            <SliderItem4></SliderItem4>
          </div>

        </MySlider>
    </div>
    </Wrapper>
          </>
          ) 
}

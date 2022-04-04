import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
height: 300px;

  
`;
const MySlider = styled(Slider)`
  height: 270px;
`;

const SliderItem1 = styled.div`
background-image: url('../../../../picture/루피잔디.png');
  background-position: 30%;
  height: 300px;
  
`;
const SliderItem2= styled.div`
  background-image: url('../../../../picture/루피피규어.jpeg');
  background-position: 80%;
  height: 300px;
`;
const SliderItem3 = styled.div`
background-image: url('../../../../picture/루피대장.png');
  background-position: 50%;
  background-repeat: no-repeat;
  height: 300px;
`;
const SliderItem4 = styled.div`
background-image: url('../../../../picture/루피보트.png');
  background-position: 50%;
  height: 300px;
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

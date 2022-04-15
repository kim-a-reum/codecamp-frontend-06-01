import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
height: 400px;
width: 1600px;


  
`;
const MySlider = styled(Slider)`
  height: 400px;
`

const SliderItem1 = styled.div`
 color: white;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;

background-color: skyblue;
  background-position: 30%;
  height: 400px;
  
`;
const SliderItem2= styled.div`
background-color: blue;
  background-position: 80%;
  height: 400px;
  color: white;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
`;
const SliderItem3 = styled.div`
background-color: pink;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 400px;
  color: white;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
`;
const SliderItem4 = styled.div`
background-color: lightcoral;
  background-position: 50%;
  height: 400px;
  color: white;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;

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
            <SliderItem1>코드캠프</SliderItem1>
          </div>
          <div>
            <SliderItem2>프론트엔드</SliderItem2>
          </div>
          <div>
            <SliderItem3>6기</SliderItem3>
          </div>
          <div>
            <SliderItem4>파이팅</SliderItem4>
          </div>

        </MySlider>
    </div>
    </Wrapper>
          </>
          ) 
}

import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
height: 320px;
width: 1300px;


  
`;
const MySlider = styled(Slider)`
  height: 280px;
`

const SliderItem1 = styled.div`
 background-image: url('../../../d.png');
 background-repeat: no-repeat;
 background-size: auto;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
  height: 320px;
 
  
`;
const SliderItem2= styled.div`
 background-image: url('../../../d.png');
 background-repeat: no-repeat;
 background-size: auto;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
 height: 320px;
`;
const SliderItem3 = styled.div`
 background-image: url('../../../d.png');
 background-repeat: no-repeat;
 background-size: auto;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
 height: 320px;
`;
const SliderItem4 = styled.div`
 background-image: url('../../../d.png');
 background-repeat: no-repeat;
 background-size: auto;
 font-size: 100px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 text-align: center;
 height: 320px;

`;


export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

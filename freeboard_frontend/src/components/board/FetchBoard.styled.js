import styled from '@emotion/styled'


export const Body = styled.div`
    box-sizing: border-box;
    margin: auto;
    display : flex;
    flex-direction : row;
    justify-content: center;
`
export const Wrapper = styled.div`
    width : 1200px;  
    height: 1562px ;
    border : 1px solid gray;
    display : flex;
    flex-direction : column;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    /* padding: 40px 70px 0px 70px; */


`
export const Top = styled.div`
    width: 996px;
    height: 120px;
    display: flex;
    flex-direction: column;
    border-bottom: 1.5px solid rgba(130, 130, 130, 1);   
`
export const TopAddress = styled.div`
    width: 996px;
    height: 70px;
    color: white;        
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 20px;
`
export const AddressBox = styled.div`
    width:250px;
    height: 50px;
    background-color: lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    font-weight: 350;
    font-size: 11px;
    padding: 7px;

`
export const TopProfile = styled.div`
    width: 996px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: inherit;
`
export const TopLeft = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    flex-direction: row;
`
export const LeftIcon = styled.div`
    width: 56px;
    background-image: url("../../ic_profile.png");
    background-size: 85% auto;
    background-repeat: no-repeat;
    
`
export const LeftName = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    
`
export const RealName = styled.div`
    height: 25px;
    font-size: 20px;
    font-weight: 500;
    
`
export const RealDate = styled.div`
    height: 25px;
    width: 250px;
    font-size: 13px;
    color : rgba(130, 130, 130, 1);
    display: flex;
    flex-direction: row;
    
`
export const TopRight = styled.div`
    width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 5px;
`
export const RightClip = styled.div`
    width: 27px;
    height: 20px;
    background-size: 100% auto;
    background-image: url("../../ic_link.png");
`
export const RightLocation = styled.div`
    width: 27px;
    height: 25px;
    background-size: 100% auto;
    background-image: url("../../ic_location.png");
`
export const Middle = styled.div`
    width: 996px;
    height: 850px;

`
export const MiddleTitle = styled.div`
    width: 996px;
    height: 150px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
`
export const MiddlePhoto= styled.div`
    width: 996px;
    height: 350px;
    background-image: url("../../ROOPI.jpeg");
    background-size: 50% auto;
    background-repeat: repeat-x;
    border-radius: 30px;
    padding-bottom: 30px;
`
export const MiddleContents= styled.div`
    width: 996px;
    height: 300px;
    background-color: #ffe3ee;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 25px;
    
`
export const Foot = styled.div`
    width: 996px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const FootVideo = styled.div`
    width: 450px;
    height: 300px;
    background-image: url("../../MyPhoto2.jpeg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ClickCircle = styled.div`
    width: 48px;
    height: 48px;
    background-image: url("../../Ellipse.png");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const OnClick = styled.div`
    width: 14px;
    height: 18px;
    background-image: url("../../Polygon.png");
    background-repeat: no-repeat;
`
export const LikeBox = styled.div`
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const LikeIcon = styled.div`
    width: 40px;
    height: 58px;
    background-image: url("../../thumb_up.png");
    background-repeat: no-repeat;
    
`
export const DisLikeIcon = styled.div`
    width: 40px;
    height: 58px;
    background-image: url("../../thumb_down.png");
    background-repeat: no-repeat;
`
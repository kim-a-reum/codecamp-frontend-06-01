import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Body = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 1500px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 0px 0px ;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */
  border-bottom: 1px solid lightgray;
`;
export const Top = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid rgba(130, 130, 130, 1);
`;
export const TopImage = styled.div`
  width: 500px;
  height: 400px;
  background-size: cover;
  background-image: url('../../../../감쟈.jpeg');
`;
export const RealImage = styled.img`
  width: 500px;
  height: 400px;
  margin-bottom: 30px;
`;
export const TopProfile = styled.div`
  width: 800px;
  padding: 0px 40px 0px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: inherit;
`;
export const TopRight = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;

`;
export const Title = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-weight: bold;
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 50px;
  border-bottom: 3px solid black;
  height: 100px;

`;
export const WhiteBox = styled.div`
width: 500px;
height: 100px;
`

export const CommentsEdit = styled.button`
  width: 22px;
  height: 135px;
  background-image: url("../../edit.png");
  background-repeat: no-repeat;
  margin-top: 30px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const CommentsDelete = styled.button`
  width: 18px;
  height: 132px;
  background-image: url("../../delete.png");
  background-repeat: no-repeat;
  margin-top: 32px;
  margin-left: 3px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const SmallPrice = styled.div`
margin-left: 5px;
padding-bottom: 10px;
  font-size: 20px;
`;
export const RealName = styled.div`
  height: 33px;
  font-size: 25px;
  font-weight: 500;
`;
export const Remark = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;
export const HashTag = styled.div`
  
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;
export const Hr = styled.div`
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
border: 0.5px solid lightgray;
`
export const HashTagWord = styled.div`
  height: 35px;
  background-color: #FFE004;
  border-radius: 13px;
  font-size: 18px;
  padding-top: 3px;
  margin-right: 10px;
  
`;
export const ButtonZip = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
`;
export const ZzimButton = styled.div`
  width: 100px;
  height: 80px;
  margin-right: 20px;
  background-color: black;
  font-size: 25px;
  text-align: center;
  padding-top: 20px;
  color: white;
  cursor: pointer;
  font-weight: 400;
`
export const Button = styled.button`
  width: 160px;
  height: 80px;
  margin-right: 20px;
  border: 0.5px solid gray;
  background-color: #A0A0A0;
  color: white;
  cursor: pointer;
  font-weight: 400;
`;
export const ButtonBuy = styled.button`
  width: 160px;
  height: 80px;
  margin-right: 20px;
  border: 0.5px solid gray;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 400;
`;

export const Middle = styled.div`
  width: 80%;
  height: 1000px;
  display: flex;
  flex-direction: row;


`;
export const MiddleLeft = styled.div`
width: 60%;
padding: 50px;


`

export const MiddleTop = styled.div`
font-size: 25px;
width: 100%;
border-bottom: 3px solid gray;
padding-bottom: 12px;

`
export const MiddleContents = styled.div`
width: 100%;
padding: 30px;
height: 150px;
overflow: hidden;
text-overflow: ellipsis;
`
export const MiddleMap= styled.div`
display: flex;
flex-direction: row;
`
export const MiddleImage = styled.div`

`
export const MiddleRight = styled.div`
width: 45%;

padding: 50px 15px 0px 15px;
border-left: 1px solid gray;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
export const MiddleUser = styled.div`
width: 100%;
height: 100px;
padding: 20px;
display: flex;
flex-direction: row;
align-items: center;
border-bottom: 1px solid gray;

`
export const UserIcon = styled.div`

background-image: url("../../ic_profile.png");
width: 60px;
height: 60px;
margin-right: 10px;

`
export const UserName = styled.div`
font-weight: lighter
`

// export const ImageWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;



//비디오랑 좋아요 부분
export const Under = styled.div`
  width: 996px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 40px;
`;

export const Youtube = styled(ReactPlayer)``;

export const LikeBox = styled.div`
  width: 130px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  color: #ffd600;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;
export const DislikeCount = styled.div`
  color: #828282;
`;
/////버튼부분
export const WrapperFoot = styled.div`
  width: 1200px;
  height: 250px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  padding: 80px 200px 0px 200px;
  justify-content: space-around;
  background-color: white;
  border-top: none;
  border-bottom: none;
`;

// export const EditButton = styled.button`
//   width: 120px;
//   height: 40px;
//   background-color: white;
//   border: 0.5px solid gray;
//   cursor: pointer;
// `;
// export const BasketButton = styled.button`
//   width: 150px;
//   height: 40px;
//   background-color: white;
//   border: 0.5px solid gray;
//   cursor: pointer;
// `;

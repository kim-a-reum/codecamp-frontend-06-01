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
  width: 1200px;
  height: 1450px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */

  border-bottom: 1px solid lightgray;
`;
export const Top = styled.div`
  width: 996px;
  height: 120px;
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid rgba(130, 130, 130, 1);
`;
export const TopAddress = styled.div`
  width: 996px;
  height: 70px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
`;
export const TopProfile = styled.div`
  width: 996px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: inherit;
`;
export const TopLeft = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;
export const LeftIcon = styled.div`
  width: 56px;
  background-image: url("../../ic_profile.png");
  background-size: 85% auto;
  background-repeat: no-repeat;
`;
export const LeftName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const RealName = styled.div`
  height: 33px;
  font-size: 33px;
  font-weight: 500;
`;
export const RealDate = styled.div`
  height: 25px;
  width: 250px;
  font-size: 13px;
  color: rgba(130, 130, 130, 1);
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
export const TopRight = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 5px;
`;
export const RightClip = styled.div`
  width: 27px;
  height: 20px;
  background-size: 100% auto;
  background-image: url("../../ic_link.png");
`;
export const RightLocation = styled.div`
  width: 35px;
  height: 25px;
  font-size: 3px;
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-image: url("../../ic_location.png");
`;
export const Location = styled.div`
width: 50px;
height: 5px;
font-size: 15px;
display: flex;
flex-direction: row;
 
`;
///이미지랑 게시글제목내용 부분
export const Middle = styled.div`
  width: 996px;
  height: 850px;
`;
export const MiddleTitle = styled.div`
  width: 996px;
  height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 40px;
`;
export const MiddlePhoto = styled.div`
  width: 996px;
  height: 350px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`
export const Photo = styled.div`
  width: 300px;
  height: 350px;
  background-image: url("../../picture/루피고민.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 30px;
  padding-bottom: 30px;
`;

export const PhotoSide = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid tomato;
  border-left: 10px solid transparent;
  margin-top: 140px;
`
export const PhotoContents = styled.div`
  width: 500px;
  height: 150px;
  background-color: tomato;
  border-radius: 30px 30px 30px 0px;
  text-align: center;
  padding-top: 50px;
  font-size: 25px;
  
`;


export const MiddleContents = styled.div`
  width: 996px;
  height: 300px;
  background-color: #ffe3ee;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 30px;
`;
//비디오랑 좋아요 부분
export const Under = styled.div`
  width: 996px;
  height: 800px;
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
  padding: 80px 400px 0px 400px;
  justify-content: space-around;
  background-color: white;
  border-top: none;
  border-bottom: none;
`;
export const BackButton = styled.button`
  width: 90px;
  height: 40px;
  border: 0.5px solid gray;
  background-color: white;
  cursor: pointer;
`;
export const EditButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: white;
  border: 0.5px solid gray;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: white;
  border: 0.5px solid gray;
  cursor: pointer;
`;

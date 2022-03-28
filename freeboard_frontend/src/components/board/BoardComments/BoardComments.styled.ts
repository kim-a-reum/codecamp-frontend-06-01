import styled from "@emotion/styled";

export const Body = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */
  border-top: none;
`;

export const WrapperComments = styled.div`
  margin-top: 20px;
  width: 996px;
  height: 900px;
  /* background-color: pink; */
`;
export const TitleComments = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.div`
  background-image: url("../../Vector.png");
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const CommentsTop = styled.div`
  width: 100%;
`;

export const CreateComments = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;
export const CommentsProfile = styled.input`
  width: 120px;
  height: 40px;
  border: 1px solid gray;
  margin-right: 15px;
`;
export const CommentsMiddle = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 20px;
`;
export const CommentsContents = styled.input`
  width: 100%;
  height: 100px;
  border: 1px solid gray;
  border-bottom: none;
`;
export const CommentsUnder = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  background-color: white;
  border-top: 1px solid lightgray;
`;

export const CommentsTyping = styled.div`
  width: 80%;
  height: 30px;
  border: 1px solid gray;
`;
export const TypingBox = styled.div`
  width: 80%;
  height: 50px;
  color: gray;
  border-top: none;
  padding-left: 5px;
`;
export const ButtonBox = styled.button`
  width: 150px;
  height: 100%;
  background-color: black;
  color: white;
  border: 1px solid gray;
  cursor: pointer;
`;

export const FetchComments = styled.div`
  width: 100%;
  height: 400px;
`;

export const CommentsBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
`;

export const CommentsDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-around;
  padding-left: 10px;
`;
export const CommentsIcon = styled.div`
  background-image: url("../../Vector (1).png");
  width: 45px;
  height: 40px;
  margin-top: 16px;
  background-repeat: no-repeat;
`;
export const CommentsName = styled.div`
  width: 220px;
  height: 25px;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;
export const RealWriter = styled.div`
  width: 200px;
  height: 40px;
  font-weight: 800;
`;
export const RealRating = styled.div`
  width: 200px;
  height: 40px;
`;
export const CommentsText = styled.div`
  width: 200px;
  height: 70px;
  padding-top: 5px;
`;
export const CommentsDate = styled.div`
  width: 200px;
  height: 20px;

  color: lightgray;
`;
export const CommentsBack = styled.div`
  width: 70px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CommentsEdit = styled.button`
  width: 22px;
  height: 22px;
  background-image: url("../../edit.png");
  background-repeat: no-repeat;
  margin-top: 5px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const CommentsDelete = styled.button`
  width: 18px;
  height: 18px;
  background-image: url("../../delete.png");
  background-repeat: no-repeat;
  margin-top: 6px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;

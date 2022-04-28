import styled from "@emotion/styled";


export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-top: none;
  border-bottom: 1px solid lightgray;
  
`;
export const WrapperComments = styled.div`
  margin-top: 20px;
  width: 996px;
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

export const PasswordInput = styled.input`
 
`;
export const CreateComments = styled.div`
  width: 1010px;
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







export const RealWriter = styled.div`
  width: 800px;
  height: 40px;
  font-weight: 800;
`;
export const RealRating = styled.div`
  padding-top: 5px;
  width: 200px;
  height: 40px;
  font-size: 5px;
  line-height: 11px;

`;


export const CommentsText = styled.div`
  width: 1000px;
  height: 70px;
  padding-top: 5px;
`;
export const CommentsDate = styled.div`
  width: 200px;
  height: 20px;
  justify-self: end;
  color: lightgray;
`;


/////수정하기 화면 페이지 

export const EditPage = styled.div`
  width: 1200px;
  height: 300px;
  padding-left: 100px;
  padding-right: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const FetchComments = styled.div`
  width: 1200px;
  height: 230px;
  padding-left: 18px;
  padding-top: 10px;
  border-left: 1px solid black;
  border-top: none;
  border-bottom: 1px solid lightgray;
  
  
  
`;

export const CommentsBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;

  
`;

export const CommentsDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 200px;
  justify-content: space-around;
  padding-left: 10px;
  
`;
export const CommentsIcon = styled.div`
  background-image: url("../../Vector (1).png");
  width: 45px;
  height: 40px;
  margin-top: 25px;
  background-repeat: no-repeat;
`;
export const CommentsName = styled.div`
  width: 300px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
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
  margin-top: 15px;
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
  margin-top: 16px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;
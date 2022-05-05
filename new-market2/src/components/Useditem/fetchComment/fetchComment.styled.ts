import styled from "@emotion/styled";

export const FetchComments = styled.div`
  width: 100%;

  border-top: none;
  border-bottom: 1px solid lightgray;

`;
export const CommentsBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;


  
`;

export const CommentsIcon = styled.div`
  background-image: url("../../Vector (1).png");
  width: 45px;
  height: 40px;
  margin-top: 25px;
  margin-left: 10px;
  background-repeat: no-repeat;
`;
export const CommentsDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-around;
  padding-left: 10px;
  margin-top: 20px;
  
`;
export const CommentsName = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;
export const RealWriter = styled.div`

  height: 40px;
  font-weight: 800;
  background-color: #FFE004;
  border-radius: 20px;
`;

export const CommentsText = styled.div`
  width: 100%;
  height: 110%;
  padding-top: 5px;

`;
export const CommentsDate = styled.div`
  width: 200px;

  font-size: 15px;
  justify-self: end;
  color: lightgray;
`;

export const CommentsEdit = styled.button`
  width: 22px;
  height: 22px;
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
  height: 18px;
  background-image: url("../../delete.png");
  background-repeat: no-repeat;
  margin-top: 32px;
  background-size: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
`;
/////////////////////////////////////

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-top: none;
  border-bottom: 1px solid lightgray;
  
`;
export const WrapperComments = styled.div`
  margin-top: 20px;

`;
export const TitleComments = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.div`
  background-image: url("../../ic_profile.png");
  width: 40px;
  height: 40px;
  background-size: contain;
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
  margin-top: 40px;
  margin-left: 25px;
  width: 85%;
  height: 100px;
  border: none;
  background-color: #E9E9E9;
  border-bottom: none;
`;
export const CommentsUnder = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid lightgray;
`;

export const CommentsTyping = styled.div`
  width: 80%;
  height: 30px;
  border: 1px solid gray;
`;

export const Button = styled.button`
    width: 80px;
  height: 40px;
  background-color: black;

  border: 1px solid gray;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 5px;
  background-color: white;
  
`;
export const ButtonBox = styled.button`
  width: 80px;
  height: 40px;
  background-color:  #FFE004;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-right: 15px;
  margin-top: 10px;
`;



/////수정하기 화면 페이지 



export const CommentsBack = styled.div`
  width: 70px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;


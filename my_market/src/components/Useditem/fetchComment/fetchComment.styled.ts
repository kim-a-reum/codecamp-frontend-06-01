import styled from "@emotion/styled";

export const FetchComments = styled.div`
  width: 1200px;
  height: 230px;
  padding-left: 100px;
  background-color: pink;
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
  width: 100%;
  height: 200px;
  justify-content: space-around;
  padding-left: 10px;
  background-color: skyblue;
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
export const RealWriter = styled.div`
  width: 800px;
  height: 40px;
  font-weight: 800;
`;


export const CommentsText = styled.div`
  width: 200px;
  height: 70px;
  padding-top: 5px;
`;
export const CommentsDate = styled.div`
  width: 200px;
  height: 20px;
  justify-self: end;
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
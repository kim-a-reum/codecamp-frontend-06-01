import styled from "@emotion/styled";


export const Row = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
 justify-content: center;
 align-items: center;
 border-radius: 20px;
`;

export const Column = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ColumnTitle = styled.div`
  width: 500px;
  height: 50px;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
  font-weight: 900;
  color: indianred;
}
`;
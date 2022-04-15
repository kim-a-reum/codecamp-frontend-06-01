import styled from "@emotion/styled";


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-around;
  
`;

export const Column = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ColumnTitle = styled.div`
  width: 350px;
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
import styled from "@emotion/styled";

export const Body = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 1000px;
  height: 500px;
  border: 1px solid pink;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;

  text-align: center;
  border-top: 3px solid black;
  border-bottom: 1px solid black;
`;
export const TopColumn = styled.div`
  width: 100px;
`;
export const TopColumnTitle = styled.div`
  width: 700px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-around;
`;

export const Column = styled.div`
  width: 100px;
`;
export const ColumnTitle = styled.div`
  width: 700px;
`;
export const DeleteButton = styled.button``;

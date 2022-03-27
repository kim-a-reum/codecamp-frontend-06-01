import styled from "@emotion/styled";

export const Body = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 900px;
  height: 260px;
  border: 1px solid pink;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 3px solid black;
  border-bottom: 1px solid black;
`;
export const TopColumn = styled.div`
  width: 25%;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-around;
`;

export const Column = styled.div`
  width: 25%;
`;

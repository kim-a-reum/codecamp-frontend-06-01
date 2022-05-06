import styled from "@emotion/styled";

export const Wrapper = styled.div`
    /* display: grid ;
    grid-template-columns:0px 550px 550px ; */
`
export const Box = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: lightseagreen;
  margin-right: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  :hover{
    color: red;
  }
`;

export const Column = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  overflow: hidden;
text-overflow: ellipsis;

`;

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
  background-color: beige;
 justify-content: center;
 align-items: center;
 border-radius: 20px;
 border: 1px solid black;
`;

export const Column = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

`;
// export const ColumnTitle = styled.div`
//   width: 700px;
//   height: 50px;
//   white-space: nowrap;
//   overflow: hidden; 
//   text-overflow: ellipsis;
//   display: flex;
//   flex-direction: row;

//   align-items: center;
//   cursor: pointer;
//   :hover{
//   font-weight: 900;
//   color: indianred;
// }
// `;
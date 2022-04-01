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
  height: 600px;
  border: 1px solid pink;
  background-color: aliceblue;
  display: flex;
flex-direction: column;
align-items: center;
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
  width: 600px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  justify-content: space-around;
  
`;

export const Column = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ColumnTitle = styled.div`
  width: 500px;
  height: 50px;
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
export const DeleteButton = styled.button`
background-color: pink;
height: 30px;
border: none;
margin-top: 10px;

`;
export const Pagination = styled.div`

width: 800px;
height: 25px;
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;

`;
export const PrevPage = styled.button`
    background-color: aliceblue;

    cursor: pointer;
    width: 200px;
    height: 30px;
    font-size: 20px;
    border: none;
    margin-right: 5px;
   

`
export const NextPage = styled.button`
    background-color: aliceblue;
    cursor: pointer;
    width: 200px;
    height: 30px;
    font-size: 20px;
    border: none;
    margin-left: 5px;
`
export const PageNumber = styled.span`
font-size: 18px;
width: 150px;
color: ${(props : any)=>(props.buttoncolor  ? "red" :"black")};
cursor: pointer; 

`
export const RealNumber = styled.div`
background-color: pink;
width: 20px;
height: 20px;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 3px;

`
export const CreateButton = styled.button`
    background-color: white;
    align-self: flex-start;
    margin-top: 10px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;
    margin-left: 5px;
    border-radius: 10px;
`
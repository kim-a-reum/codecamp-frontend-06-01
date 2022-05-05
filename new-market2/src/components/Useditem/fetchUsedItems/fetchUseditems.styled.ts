import styled from "@emotion/styled";

export const Wrapper = styled.div`
    /* display: grid ;
    grid-template-columns:0px 550px 550px ; */
`
export const Box = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  :hover{
    color: red;
  }
`;

export const Image = styled.div`
width: 100%;
height: 80%;
background-color: aliceblue;
`
export const RealImage = styled.img`
  width: 300px;
  height: 170px;
  margin-bottom: 30px;
`;
export const DefaultImage = styled.img`
  width: 310px;
  height: 200px;
  background-image: url('../../potato.png') ;
  background-size: contain;
`;

export const Column = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 10px 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
text-overflow: ellipsis;
font-size: 22px;

`;

export const SDate = styled.div`
height: 15px;
      font-size: 13px;
      

`
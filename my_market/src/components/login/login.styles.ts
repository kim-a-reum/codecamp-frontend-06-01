import styled from '@emotion/styled'


export const Body = styled.div`
    box-sizing: border-box;
    width: 1000px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-size: cover;



`

export const TopBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 500px;
    padding: 30px 0px 0px 20px;
`

export const BottomButton = styled.button`
background-color: pink;
border: none;
width: 300px;
height: 100px;
border-radius: 20px;
cursor: pointer;

`
export const PhotoBox = styled.div`
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  

`
export const Photo = styled.div`
  width: 250px;
  height: 300px;
  background-image: url("../../picture/루피드루와.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 30px;
  padding-bottom: 30px;
`;

export const PhotoSide = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid pink;
  border-right: 10px solid transparent;
  margin-top: 140px;
`
export const PhotoContents = styled.div`
  width: 200px;
  height: 150px;
  background-color: pink;
  border-radius: 30px 30px 0px 30px;
  text-align: center;
  padding-top: 50px;
  font-size: 25px;
  
`;
export const Wrapper = styled.div`

    
    width: 540px;
    height: 500px;
    border: 1px solid indianred;
    box-shadow: 5px 5px 20px pink;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    background-color: rgba(0,0,0,0.5);

`
export const EmailBox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
    `
export const EmailError = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
    `
export const NameBox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`
export const NameError = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
    `
export const PassWordBox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`
export const PassWordError = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
`
export const PassWordBox2 = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`
export const PassWordError2 = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
    margin-bottom: 5px;
`

export const FinshButton = styled.button`
    width: 380px;
    height: 75px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 15px;
    

`
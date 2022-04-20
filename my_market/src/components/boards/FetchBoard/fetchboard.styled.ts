import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 1300px;  
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    
`
export const Title = styled.div`
    width: 95%;
    background-color: aqua;
    height: 80px;
    margin: 15px;
    border-bottom: 3px solid lightgray;
    
    background-color: white;
    padding: 20px;
`
export const ImageBox = styled.div`
display: flex;
flex-direction: row;
width: 80%;

justify-content: center;

`
export const Images = styled.img`
 width: 200px;
 height: 200px;
  margin-bottom: 30px;
  margin-right: 20px;
  
`
export const Contents = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;

    margin: 15px;
   


    background-color: white;
`
export const Name = styled.div`
width: 100px;
height: 50px;
text-align: center;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: row;
    
`
export const RealContents = styled.div`
width: 80%;
height: 500px;
text-align: left;


background-color: white;
    
    
`
export const WrapperBottom = styled.div`
   width: 1300px;  
height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`
export const Mybutton = styled.button`
width: 100px;
height: 40px;
border-radius:10px;
border: none;
background-color: #6400ff;
color: white;
margin-right: 10px;
font-size: 18px;
cursor: pointer;
`

export const Icon = styled.div`
background-image: url('../../../아이콘.png');
background-repeat: no-repeat;
width: 30px;
height: 30px;
`
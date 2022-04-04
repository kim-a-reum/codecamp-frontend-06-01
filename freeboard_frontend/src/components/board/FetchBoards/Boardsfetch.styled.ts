import styled from "@emotion/styled";

export const Body = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WapperBest = styled.div`
  width: 1000px;
  height: 350px;
  background-color: #E1BEE7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

`;
export const BestTitle = styled.div`
  height: 80px;
  font-size: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const BestBoards = styled.div`
width: 950px;
height: 240px;
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
overflow: hidden;
    text-overflow: ellipsis;
`
export const BestBoard = styled.div`
width: 210px;
height: 220px;
border-radius: 20px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
overflow: hidden;
text-overflow: ellipsis;
`
export const BoardTop1 = styled.div`
width: 210px;
height: 110px;
background-size: cover;
background-position: 0px -10px;
border-radius: 20px 20px 0px 0px;
background-image: url('../../../../istockphoto.jpeg');
background-repeat: no-repeat;
align-self: center;
`
export const BoardTop2 = styled.div`
width: 210px;
height: 110px;
border-radius: 20px 20px 0px 0px;
background-position: 0px -3px;
background-image: url('../../../../hill.jpeg');
background-size: cover;
background-repeat: no-repeat;
align-self: center;
`
export const BoardTop3 = styled.div`
width: 210px;
height: 110px;
border-radius: 20px 20px 0px 0px;
background-size: cover;
background-image: url('../../../../smiley.webp');
background-repeat: no-repeat;
align-self: center;
`
export const BoardTop4 = styled.div`
width: 210px;
height: 110px;
border-radius: 20px 20px 0px 0px;
background-image: url('../../../../apples.jpeg');
background-repeat: no-repeat;
align-self: center;
background-size: cover;
`
export const BoardTitle = styled.div`
width: 210px;
height: 40px;
padding-left: 7px;
overflow: hidden;
text-overflow: ellipsis;
cursor: pointer;
  :hover{
    color: indianred;
  }

`
export const BoardProfile = styled.div` 
width: 210px;
height: 30px;
display: flex;
flex-direction: row;
overflow: hidden;
text-overflow: ellipsis;




`
export const Icon = styled.div`
background-image: url('../../../../ic_profile.png');
width: 30px;
height: 30px;
background-position: center;
background-size: cover;
margin-top: 5px;


`
export const Name = styled.div`
width: 140px;
margin-left: 5px;
overflow: hidden;
text-overflow: ellipsis;

`
export const Like = styled.div`
width: 30px;
height: 30px;
margin-top: 8px;
background-repeat: no-repeat;
background-image: url('../../../../Vector (2).png');
background-size: 80%;
overflow: hidden;
text-overflow: ellipsis;

`
export const BoardDetail = styled.div`
width: 190px;
height: 30px;
display: flex;
flex-direction: row;
justify-content: inherit;
margin-left: 10px;

border-radius: 0px 0px 20px 20px;



`
export const Date = styled.div`
font-size: 18px;
`
export const LikeCount = styled.div`
font-size: 25px;
display: flex;
flex-direction: column;
text-align: center;
width: 30px;
height: 10px;
padding-bottom: 5px;
`
export const BoardSearch = styled.div`
width: 1000px;
height: 50px;
margin-bottom: 10px;
display: flex;
flex-direction: row;
align-items: center;
padding-left: 53px;
`
export const SearchTitle = styled.div`
font-size: 18px;
width: 500px;
height: 40px;
padding: 0px 5px 0px 5px ;
background-color: lightgray;
border: none;
border-radius: 5px;
margin-left: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`
export const SearchImage = styled.div`
width: 30px;
height: 30px;
background-image: url('../../../../Vector (3).png');
background-repeat: no-repeat;
background-size: 90%;

`
export const SearchInput = styled.input`
width: 450px;
height: 30px;
background-color: white;
border: none;
border-radius: 10px;

`
export const SearchDate = styled.input`
width: 200px;
height: 38px;
font-size: 19px;
margin-left: 30px;
border: none;
border-radius: 0ch;
text-align: center;
`
export const SearchButton = styled.button`
width: 80px;
height: 40px;
border-radius: 10px;
font-size: 18px;
margin-left: 20px;
background-color: black;
border: none;
color: white;
cursor: pointer;
`

export const WrapperTable = styled.div`
  width: 1000px;
  height: 750px;
  background-color: #F3E5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  
  align-items: center;
  text-align:center;
  border-top: 3px solid black;
  border-bottom: 1px solid black;
`;
export const TopColumn = styled.div`
  width: 100px;
`;
export const TopColumnId = styled.div`
  width: 110px;
`;
export const TopColumnDelete = styled.div`
  width: 50px;
`;
export const TopColumnTitle = styled.div`
  width: 470px;
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
  width: 480px;
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
export const DeleteButton = styled.button`
background-color: pink;
text-align: center;
height: 30px;
border: none;
font-size: 18px;
margin-top: 10px;

`;
export const Pagination = styled.div`

width: 1000px;

margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: center;


`;
export const PrevPage = styled.button`
    background-color: aliceblue;

    cursor: pointer;
    width: 80px;
    height: 30px;
    font-size: 20px;
    border: none;
    border-radius: 20px;
    
    margin-top: 5px;
   

`
export const NextPage = styled.button`
    background-color: aliceblue;

cursor: pointer;
width: 80px;
height: 30px;
font-size: 20px;
border: none;
border-radius: 20px;

margin-top: 5px;
`
export const PageNumber = styled.button`
font-size: 25px;
width: 60px;
color: ${(props : any)=>(props.buttoncolor  ? "red" :"black")};
cursor: pointer; 
border: none;
background-color: #F3E5F5;
margin-right: 5px;
margin-left: 5px;
display: flex;
flex-direction: row;
justify-content: center;


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
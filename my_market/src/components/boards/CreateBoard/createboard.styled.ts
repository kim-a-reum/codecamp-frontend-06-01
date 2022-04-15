import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    width: 1300px;  
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    width: 80%;
    height: 80px;
    padding: 25px;
    margin: 15px;
    border-bottom: 3px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    background-color: white;

    
`
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 600px;
    padding: 25px;
    margin: 15px;
    border-bottom: 3px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    background-color: white;
    
`
export const ContentsTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    height: 80px;
    padding: 10px;
`
export const TitleName = styled.div`
    margin-right: 20px;
`
export const RealTitle = styled.input`
    height: 35px;
    width: 80%;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 15px;
`

export const ContentsDetail = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    height: 500px;
    
`
export const DetailName = styled.div`
     margin-right: 20px;
`
export const RealContents = styled.input`
    height: 400px;
    width: 80%;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 15px;
`
export const Images = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 80%;
    border-bottom: 2px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    height: 120px;
    padding: 10px;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    border-bottom: 2px solid pink;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    height: 80px;
    padding: 10px;
    background-color: white;
    margin-top: 10px;
`
export const RealName = styled.input`
    height: 35px;
    width: 200px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 15px;
    margin: 10px;
    
`
export const DetailPassword = styled.input`
height: 35px;
    width: 200px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 15px;
    margin: 10px;

`
export const WrapperBottom = styled.div`
width: 1300px;  
height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    background-color: aliceblue;
`
export const Mybutton = styled.button`
width: 100px;
height: 40px;
border-radius:10px;
border: none;
background-color: indianred;
margin-right: 10px;
font-size: 18px;
cursor: pointer;
`
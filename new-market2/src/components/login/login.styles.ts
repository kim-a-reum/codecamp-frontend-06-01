import styled from '@emotion/styled'


export const Body = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    
`
export const Wrapper = styled.div`
    width: 580px;
    height: 600px;
    background-color: aliceblue;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;

`
export const LoginTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: inherit;
    border-bottom: 1px solid lightgray;
    margin-bottom: 40px;

`
export const Big = styled.div`
    margin-right: 15px;
    font-size: 50px;

`
export const Small = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;

`
export const EmailBox = styled.input`
    width: 100%;
    height: 60px;
    background-color: #F6F6F6;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 15px;
    }
    `
export const EmailError = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
    `

export const NameError = styled.div`
    color: red;
    height: 12px;
    font-size: 11px;
    `
export const PassWordBox = styled.input`
    width: 100%;
    height: 60px;
    background-color: #F6F6F6;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 15px;
    }
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
export const SignupBox = styled.div`

 width: 70%;
 height: 50px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`
export const Text1 = styled.div`
font-size: 15px;
color: lightgray;
font-weight: lighter;
margin-right: 15px;
`
export const text2 = styled.div`
font-size: 15px;
font-weight: lighter;
border-bottom: 1px solid black;
cursor: pointer;
`
export const FinshButton = styled.button`
    width: 380px;
    height: 75px;
    border: 1px solid #D2D2D2;
    background-color: #FFE004;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 15px;
    

`
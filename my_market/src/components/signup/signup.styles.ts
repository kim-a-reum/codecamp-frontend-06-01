import styled from '@emotion/styled'


export const Body = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url('../../picture/back.jpeg');
    background-size: cover;
    margin-top: -40px;


`

export const TopBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 500px;
    padding: 30px 0px 0px 20px;
`

export const Wrapper = styled.div`

    
    width: 540px;
    height: 600px;
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
    height: 18px;
    font-size: 11px;
    margin-bottom: 5px;
`

export const FinshButton = styled.button`
    width: 380px;
    height: 70px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    

`
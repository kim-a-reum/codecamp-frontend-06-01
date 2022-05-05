import styled from "@emotion/styled"

const InputBox = styled.input`
    width: 80%;
    margin-top: 10px;

`
const MyButton = styled.button`
    width: 60px;
    height: 40px;
    border: none;
    background-color: #FFE004;
    font-size: 20px;
    margin-left: 5px;

`


export default function CommentAnswerUI(props){


    return(
        <>
        {/* 답변 쓰기 <br/> */}
        <InputBox type="text" onChange={props.onChangeContents} value={props.contents}/>
        <MyButton onClick={props.onClickCreate}>등록</MyButton>
        </>
    )
}
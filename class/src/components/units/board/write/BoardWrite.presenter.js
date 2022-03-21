import {Submitbutton,WriterInput} from './BoardWrite.styled'
//각각 받기 때문에 무엇을 import할지 골라줘야 한다 {안에 따로 }써준다
export default function BoardWriteUI(props){
//한페이지에서 한개이고 무조건 default값으로 나간다고 보면 됨
    return(

        <div> 
        
        작성자 : <WriterInput type="text" onChange={props.onChangeWriter}/><br/>
        제목 : <WriterInput type="text" onChange={props.onChangeTitle}/><br/>
        내용 : <WriterInput type="text" onChange={props.onChangeContents}/><br/>
        <Submitbutton onClick={props.callGrapphqlApi} 
        isActive = {props.isActive}> GRAPHQL_API 요청하기 ! </Submitbutton>
        {/* //onChangeWriter,onChangeTitle...callGrapphqlApi 등등 props로 받아올거야 // */}

        
        </div>

    )
}
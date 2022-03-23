//프리젠터 컴포넌트
import {Submitbutton,WriterInput} from './BoardWrite.styled'


export default function BoardWriteUI(props){

    return(

        <div> 
        <h1> {props.isEdit ? "수정" : "등록"} 페이지 </h1>
        작성자 : <WriterInput type="text" onChange={props.onChangeWriter}/><br/>
        제목 : <WriterInput type="text" onChange={props.onChangeTitle}/><br/>
        내용 : <WriterInput type="text" onChange={props.onChangeContents}/><br/>
        <Submitbutton onClick={props.isEdit ? props.OnClickUpdate : props.OnClickCreate} isActive = {props.isActive}> 
        {props.isEdit ? "수정" : "등록"}하기 ! 
        </Submitbutton>


        
        </div>

    )
}
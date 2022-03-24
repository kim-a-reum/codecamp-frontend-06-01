//프리젠터 컴포넌트
import {Submitbutton,WriterInput} from './BoardWrite.styled'
import { ChangeEvent, MouseEvent, useState} from 'react'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props:IBoardWriteUIProps){
    console.log(props.data)
    return(
        // props.data.fetchboard.writer 이런애들이 아마 들어올거야! 
        
        <div> 
        <h1> {props.isEdit ? "수정" : "등록"} 페이지 </h1>
        작성자 : <WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br/>
        {/* //props.data가 있으면 보여주고 없으면 보여주지마를 해야 등록하기 페이지에서는 기존값이 안보이겠지 !!!/옵셔널 체이닝 기억나지!? */}

        {/* onchange가 안일어나면 나머지가 빈값으로 다 날아간다 그렇기 때문엥 
        1. 수정페이지에 왔을때 데이터가 있으면 처음부터 state에다가 강제로 넣어준다 
        2. updateboard api요청할때 변경이 일어난 애들만 백엔드에 보내주자 (이게 효율적 !) */}
        제목 : <WriterInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br/>
        내용 : <WriterInput type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /><br/>
        <Submitbutton onClick={props.isEdit ? props.OnClickUpdate : props.OnClickCreate} isActive = {props.isActive}> 
        {props.isEdit ? "수정" : "등록"}하기 ! 
        </Submitbutton>


        
        </div>

    )
}
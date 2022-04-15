
import * as S from "./createboard.styled"
import { ICreateBoardUIProps } from "./CreateBoard.types"
import { v4 as uuidv4 } from "uuid";
import LoadBox from "../../commons/Uploadimg/Upload.container";

export default function CreateBoardPageUI(props : ICreateBoardUIProps){

console.log(props.data)
    return(
<div>
        <S.Wrapper>
            <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
            <S.Contents>
                <S.ContentsTitle>
                    <S.TitleName>제목</S.TitleName>
                    <S.RealTitle type="text"
                placeholder="제목을 작성해주세요."
                onChange={props.onChangeTitle}
                defaultValue={props.data?.fetchBoard.title}/>
                </S.ContentsTitle>
                <S.ContentsDetail>
                    <S.DetailName>내용</S.DetailName>
                    <S.RealContents placeholder="내용을 작성해주세요."
                onChange={props.onChangeContents}
                defaultValue={props.data?.fetchBoard.contents}/>
                </S.ContentsDetail>
            </S.Contents>
            <S.Images>
            사진 첨부               
                {props.fileUrls.map((el : any, index : any)=>(
                  <LoadBox key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}/>))}
                
            </S.Images>
            <S.Detail>
                <div>작성자</div>
                <S.RealName type="text"
                placeholder="작성자 이름을 적어주세요."
                onChange={props.onChangeName}
                readOnly={props.data?.fetchBoard.writer ? true : false}
                defaultValue={props.data?.fetchBoard.contents}/>
                <div>비밀번호</div>
                <S.DetailPassword type="password"
                placeholder="비밀번호를 작성해주세요."
                onChange={props.onChangePassword}/> 
            </S.Detail>

        </S.Wrapper>
        <S.WrapperBottom>
            <button onClick={ props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "수정" : "등록"}하기</button>
        </S.WrapperBottom>


</div>
    )


}
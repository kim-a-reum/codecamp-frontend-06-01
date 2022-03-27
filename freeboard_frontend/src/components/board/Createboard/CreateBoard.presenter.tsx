//게시글 작성, 수정 프레젠터
import { ICreateBoardUIProps } from './CreateBoard.types'
import * as S from './CreateBoard.styled'

export default function CreateBoardUI(props: ICreateBoardUIProps){
  
  
  return (
    
    
    <S.Body>
      <S.Wrapper>
        <S.WrapperTitle>
            게시물 {props.isEdit ? "수정" : "등록"}
        </S.WrapperTitle>
          
        <S.WrapperPersonal>
          <S.Personal>
            <S.PersonalName>작성자</S.PersonalName>
            <S.PersonalName2 type="text" placeholder="이름을 적어주세요." onChange={props.onChangeName} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer ? true : false}></S.PersonalName2>
            <S.Error>{props.nameError}</S.Error>
          </S.Personal>

          <S.Personal>
            <S.PersonalName>비밀번호</S.PersonalName>
            <S.PersonalName2 type="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangePassword} ></S.PersonalName2>
            <S.Error>{props.passwordError}</S.Error>
          </S.Personal>
          
        </S.WrapperPersonal>
          
        <S.WrapperContents>
          <S.ContentsTitle>
              <S.TitleName>제목</S.TitleName>
              <S.TitleForm type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}></S.TitleForm>
              <S.Error>{props.titleError}</S.Error>
          </S.ContentsTitle>

          <S.ContentsValue>
              <S.ValueName>내용</S.ValueName>
              <S.ValueForm placeholder="내용을 작성해주세요." onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}></S.ValueForm>
              <S.Error>{props.contentsError}</S.Error>
          </S.ContentsValue> 

          <S.ContentsAddress>
              <S.AddressTitle>주소</S.AddressTitle>
              <S.AddressNumber>
                  <S.NumberValue></S.NumberValue>
                  <S.NumberSearch>
                    <S.SearchText>우편번호 검색</S.SearchText>
                    </S.NumberSearch>
              </S.AddressNumber>
              <S.AddressValue></S.AddressValue>
              <S.AddressValue></S.AddressValue>
          </S.ContentsAddress>

          <S.ContentsYoutube>
              <S.YoutubeName>유튜브</S.YoutubeName>
              <S.YoutubeValue></S.YoutubeValue>
          </S.ContentsYoutube>
        </S.WrapperContents>
        
        <S.WrapperFooter>
            <S.FooterPictures>
              <S.PicturesName>사진 첨부</S.PicturesName>
              <S.PicturesLoad>
                  <S.LoadBox><S.BoxContents>Upload</S.BoxContents></S.LoadBox>
                  <S.LoadBox><S.BoxContents>Upload</S.BoxContents></S.LoadBox>
                  <S.LoadBox><S.BoxContents>Upload</S.BoxContents></S.LoadBox>
              </S.PicturesLoad>
            </S.FooterPictures>

            <S.FooterSettings>
                <S.SettingTitle>메인설정</S.SettingTitle>
                <S.SettingChoice type = "radio" name = "name"/> 유튜브
                <S.SettingChoice type = "radio" name = "name"/> 사진
            </S.FooterSettings>

            <S.FooterButton>
              <S.FinshButton onClick={props.isEdit ? props.OnClickUpdate : props.onClickSubmit } isActive = {props.isActive}>{props.isEdit ? "수정" : "등록"}하기</S.FinshButton>
            </S.FooterButton> 
        </S.WrapperFooter>  
        
      
      
      </S.Wrapper>
      
    </S.Body>
  )
}
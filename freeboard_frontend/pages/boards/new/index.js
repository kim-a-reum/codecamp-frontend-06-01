import {Wrapper,Body,WrapperTitle,WrapperPersonal,Personal,PersonalName, PersonalName2,WrapperContents,ContentsTitle,TitleName,TitleForm,ContentsValue,ValueName,ValueForm,ContentsAddress,AddressTitle,AddressNumber,NumberValue,NumberSearch,SearchText,AddressValue,ContentsYoutube,YoutubeName,YoutubeValue,WrapperFooter,FooterPictures,PicturesName,PicturesLoad,LoadBox,BoxContents,FooterSettings,FooterButton,SettingTitle,SettingChoice,FinshButton,ButtonValue}from '../../../styles/emotion'

export default function AAAPage() {

    // 여기는 자바스크립트 쓰는곳 


  return (

    // HTML 쓰는곳 
    <Body>
      <Wrapper>
        <WrapperTitle>
            게시물 등록
        </WrapperTitle>
          
        <WrapperPersonal>
          <Personal>
            <PersonalName>작성자</PersonalName>
            <PersonalName2></PersonalName2>
          </Personal>

          <Personal>
            <PersonalName>비밀번호</PersonalName>
            <PersonalName2></PersonalName2>
          </Personal>
          
        </WrapperPersonal>
          
        <WrapperContents>
          <ContentsTitle>
              <TitleName>제목</TitleName>
              <TitleForm></TitleForm>
          </ContentsTitle>

          <ContentsValue>
              <ValueName>내용</ValueName>
              <ValueForm></ValueForm>
              
          </ContentsValue> 

          <ContentsAddress>
              <AddressTitle>주소</AddressTitle>
              <AddressNumber>
                  <NumberValue></NumberValue>
                  <NumberSearch>
                    <SearchText>우편번호 검색</SearchText>
                    </NumberSearch>
              </AddressNumber>
              <AddressValue></AddressValue>
              <AddressValue></AddressValue>
          </ContentsAddress>

          <ContentsYoutube>
              <YoutubeName>유튜브</YoutubeName>
              <YoutubeValue></YoutubeValue>
          </ContentsYoutube>
        </WrapperContents>
        
        <WrapperFooter>
            <FooterPictures>
              <PicturesName>사진 첨부</PicturesName>
              <PicturesLoad>
                  <LoadBox><BoxContents>Upload</BoxContents></LoadBox>
                  <LoadBox><BoxContents>Upload</BoxContents></LoadBox>
                  <LoadBox><BoxContents>Upload</BoxContents></LoadBox>
              </PicturesLoad>
            </FooterPictures>

            <FooterSettings>
                <SettingTitle>메인설정</SettingTitle>
                <SettingChoice type = "radio" name = "name"/> 유튜브
                <SettingChoice type = "radio" name = "name"/> 사진
            </FooterSettings>

            <FooterButton>
              <FinshButton><ButtonValue>등록하기</ButtonValue></FinshButton>
            </FooterButton> 
        </WrapperFooter>  
        
      
      
      </Wrapper>
      
    </Body>
  )
}
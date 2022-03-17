import {Wrapper,Body,WrapperTitle,WrapperPersonal,Personal,PersonalName, PersonalName2,WrapperContents,ContentsTitle,TitleName,TitleForm,ContentsValue,ValueName,ValueForm,ContentsAddress,AddressTitle,AddressNumber,NumberValue,NumberSearch,SearchText,AddressValue,ContentsYoutube,YoutubeName,YoutubeValue,WrapperFooter,FooterPictures,PicturesName,PicturesLoad,LoadBox,BoxContents,FooterSettings,FooterButton,SettingTitle,SettingChoice,FinshButton,Error}from '../../../styles/emotion'

import { useState } from 'react'

export default function AAAPage() {
        // 원래칸을 공백으로 두었다가 입력한 값으로 바꿔줌
      const[name,setName] = useState("")
      const[password,setPassword] = useState("")
      const[title,setTitle] = useState("")
      const[contents,setContents] = useState("")
       // 원래칸을 공백으로 두었다가 (조건문) 에러가 나면 값을 바꿔줌
      const [nameError, setNameError] = useState("");
      const [passwordError, setPasswordError] = useState("");
      const [titleError, setTitleError] = useState("");
      const [contentsError, setContentsError] = useState("");
        // 입력칸안에 글자가 들어오면 바로바로 그 값을 넣어주는 함수 
      function onChangeName(event){
        setName(event.target.value);
        if (event.target.value !== "") {
          setNameError("");
        }
      };
      function onChangePassword(event){
        setPassword(event.target.value);
        if (event.target.value !== "") {
          setPasswordError("");
        }
      };
      function onChangeTitle(event){
        setTitle(event.target.value);
        if (event.target.value !== "") {
          setTitleError("");
        }
      };
      function onChangeContents(event){
        setContents(event.target.value);
        if (event.target.value !== "") {
          setContentsError("");
        }
      };

      function onClickSubmit() {
        
        if (name === "") {
          setNameError("작성자를 입력해주세요.");
        }
        if (password === "") {
          setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
          setTitleError("제목을 입력해주세요.");
        }
        if (contents === "") {
          setContentsError("내용을 입력해주세요.");
        }
        if(name !== "" && password !== "" && title !== "" && contents !== "") {
          alert("게시물 등록에 성공하였습니다!")
        }



      };

  return (

    
    <Body>
      <Wrapper>
        <WrapperTitle>
            게시물 등록
        </WrapperTitle>
          
        <WrapperPersonal>
          <Personal>
            <PersonalName>작성자</PersonalName>
            <PersonalName2 type="text" placeholder="이름을 적어주세요." onChange={onChangeName}></PersonalName2>
            <Error>{nameError}</Error>
          </Personal>

          <Personal>
            <PersonalName>비밀번호</PersonalName>
            <PersonalName2 type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword} ></PersonalName2>
            <Error>{passwordError}</Error>
          </Personal>
          
        </WrapperPersonal>
          
        <WrapperContents>
          <ContentsTitle>
              <TitleName>제목</TitleName>
              <TitleForm type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} ></TitleForm>
              <Error>{titleError}</Error>
          </ContentsTitle>

          <ContentsValue>
              <ValueName>내용</ValueName>
              <ValueForm placeholder="내용을 작성해주세요." onChange={onChangeContents}></ValueForm>
              <Error>{contentsError}</Error>
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
              <FinshButton onClick={onClickSubmit}>등록하기</FinshButton>
            </FooterButton> 
        </WrapperFooter>  
        
      
      
      </Wrapper>
      
    </Body>
  )
}
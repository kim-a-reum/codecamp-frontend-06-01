import CreateBoardUI from './CreateBoard.presenter';
import { CREATE_BOARD } from './CreteBoard.queries';

import { useState } from 'react'
import {useMutation} from '@apollo/client'

import { useRouter } from 'next/router';

export default function CreateBoardPage() {
      const [isActive,setIsActive] = useState(false)
      const[name,setName] = useState("");
      const[password,setPassword] = useState("");
      const[title,setTitle] = useState("");
      const[contents,setContents] = useState("");
      const [nameError, setNameError] = useState("");
      const [passwordError, setPasswordError] = useState("");;
      const [titleError, setTitleError] = useState("");
      const [contentsError, setContentsError] = useState("");;
      const [data, setData] = useState(""); 
      const router = useRouter();
      const [createBoard] = useMutation(CREATE_BOARD);

      function onChangeName(event){
        setName(event.target.value);
        if (event.target.value !== "") {
          setNameError("");
        }
        if(event.target.value !== "" && title !== "" && contents !== "" && password !== ""){setIsActive(true)}
        else { setIsActive(false)}
      };
      function onChangePassword(event){
        setPassword(event.target.value);
        if (event.target.value !== "") {
          setPasswordError("");
        }
        if(event.target.value !== "" && title !== "" && contents !== "" && name !== ""){setIsActive(true)}
        else { setIsActive(false)}
      };
      function onChangeTitle(event){
        setTitle(event.target.value);
        if (event.target.value !== "") {
          setTitleError("");
        }
        if(event.target.value !== "" && name !== "" && contents !== "" && password !== ""){setIsActive(true)}
        else { setIsActive(false)}
      };
      function onChangeContents(event){
        setContents(event.target.value);
        if (event.target.value !== "") {
          setContentsError("");
        }
        if(event.target.value !== "" && title !== "" && name !== "" && password !== ""){setIsActive(true)}
        else { setIsActive(false)}
      };

      const onClickSubmit = async () => {
        
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
          
          try{  const result = await createBoard({ 
            variables : { createBoardInput :{writer: name, password: password,title: title,contents: contents}}
          })   
        console.log(result.data)
        alert("게시물 등록에 성공하였습니다!")
        alert("상세 페이지로 이동해볼까요?!")
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)    
        
              }catch(error){
        alert(error.message)}

      } 
    }     
      return ( <CreateBoardUI
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        nameError={nameError}
        titleError={titleError}
        contentsError={contentsError}
        passwordError={passwordError}
        onClickSubmit={onClickSubmit}
        isActive = {isActive}
        />
        


      )}

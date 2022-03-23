//게시글 작성, 수정 컨테이너 

import CreateBoardUI from './CreateBoard.presenter';
import { CREATE_BOARD } from './CreteBoard.queries';
import { UPDATE_BOARD } from './CreteBoard.queries';
import { useState } from 'react'
import {useMutation} from '@apollo/client'

import { useRouter } from 'next/router';

export default function CreateBoardPage(props) {
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
      const [updateBoard] = useMutation(UPDATE_BOARD)

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
        //등록하기 함수입니다 
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
        alert("게시물 등록에 성공하였습니다!")
        alert("상세 페이지로 이동해볼까요?!")
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)    
        
              }catch(error){
        alert(error.message)}

      } 
    }     

    const OnClickUpdate = async () => {
      //수정하기 함수입니다
    try { const result = await updateBoard({ 
              variables: { updateBoardInput:{title : title, contents:contents}, boardId: (router.query.boardId)}
      })
      alert("게시글 수정에 성공했어요! ")
      console.log(result.data)
      router.push(`/boards/${router.query.boardId}`)
    } catch(error){
      alert(error.message)
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
        OnClickUpdate={OnClickUpdate}
        isEdit={props.isEdit}
        />
        


      )}

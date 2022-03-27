//게시글 작성, 수정 컨테이너

import CreateBoardUI from "./CreateBoard.presenter";
import { CREATE_BOARD } from "./CreteBoard.queries";
import { UPDATE_BOARD } from "./CreteBoard.queries";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  ICreateBoardProps,
  IMyVariables,
  ImyupdateBoardInput,
} from "./CreateBoard.types";

export default function CreateBoardPage(props: ICreateBoardProps) {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [data, setData] = useState("");
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      contents !== "" &&
      name !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      event.target.value !== "" &&
      name !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (
      event.target.value !== "" &&
      title !== "" &&
      name !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

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
    if (name !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        alert("게시물 등록에 성공하였습니다!");
        alert("상세 페이지로 이동해볼까요?!");
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const OnClickUpdate = async () => {
    //수정하기 함수입니다
    const myupdateBoardInput: ImyupdateBoardInput = {};

    const myVariables: IMyVariables = {
      updateBoardInput: myupdateBoardInput,
      password: password,
      boardId: String(router.query.boardId),
    };
      
      if (title !== "") {
        myupdateBoardInput.title = title;
      }
      if (contents !== "") {
        myupdateBoardInput.contents = contents;
      }
      
    try {
      await updateBoard({
        variables: myVariables,
      });
      alert("게시글 수정에 성공했어요! ");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CreateBoardUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      nameError={nameError}
      titleError={titleError}
      contentsError={contentsError}
      passwordError={passwordError}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
      OnClickUpdate={OnClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}

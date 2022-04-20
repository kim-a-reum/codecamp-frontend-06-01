import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import CreateBoardPageUI from "./createboard.presenter";
import { ICreateBoardProps, ImyupdateBoardInput, IMyVariables } from "./CreateBoard.types";

const CREATE_BOARD = gql`
mutation CreateBoard($createBoardInput: CreateBoardInput!) {
  createBoard(createBoardInput: $createBoardInput) {
    _id
    title
    contents
    createdAt
    updatedAt
    youtubeUrl
  }
}
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
    }
  }
`;


export default function CreateBoardPage(props : ICreateBoardProps){
const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const fileRef = useRef<HTMLInputElement>(null)

  const onChangeFileUrls = (fileUrl:string, index: number) =>{
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

const onChangeName =(event: ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
}
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  const onClickSubmit = async () => {
    //등록하기 함수입니다
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password,
              title,
              contents,
              images : fileUrls,

            },
          }
        });
        alert("게시물등록성공 ! ")
        console.log(result.data)
  
        router.push(`/main/${String(result.data.createBoard._id)}`);
        // router.push(`/main/${result.data.createBoard._id}`);

      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }

    const OnClickUpdate = async () => {
      //수정하기 함수입니다
      const myupdateBoardInput: ImyupdateBoardInput = {};
  
      const myVariables: IMyVariables = {
        updateBoardInput: myupdateBoardInput,
        password: password,
        boardId: String(router.query.boardid),
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
        alert("게시물 수정에 성공 ! ")
        router.push(`/main/${router.query.boardid}`);
      } catch (error) {
        if (error instanceof Error) alert("비밀번호를 확인하세요");
      }
    };
    
 useEffect(()=>{
   if(props.data?.fetchBoard.images?.length){
     setFileUrls([...props.data?.fetchBoard.images])
   }
 },[props.data])


 const onClickFetch = ()=>{
  router.push(`/main/${router.query.boardid}`);
 }
 const onClickMain = ()=>{
  router.push('/main')
}
    return(
<div>
    <CreateBoardPageUI
    fileRef = {fileRef}
    fileUrls={fileUrls}
    onChangeFileUrls={onChangeFileUrls}
    onChangeName={onChangeName}
    onChangePassword={onChangePassword}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onClickSubmit={onClickSubmit}
    onClickUpdate={OnClickUpdate}
    onClickFetch={onClickFetch}
    onClickMain={onClickMain}
    isEdit={props.isEdit}
    data={props.data}
    


    />
</div>
    )


}
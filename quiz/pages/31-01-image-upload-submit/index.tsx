import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export const CREATE_BOARD = gql`
  mutation CreateBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [file1, setFile1] = useState<File>();
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없어요!");
      return;
    }
    // 자바스크림트 내에서 파일을 읽어서 미리보기 가능하게 하는 기능을 써보자!
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // 차입이 스트링일때만 실행시켜줘!
      if (typeof data.target?.result === "string") {
        setImgUrl(data.target?.result);
        // 파일도 같이 저장해준다
        setFile1(file);
      }
    };
  };
  const onClickSubmit = async () => {
    const result1 = await uploadFile({
      variables: { file: file1 },
    });
    const imageUrl = result1.data.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: name,
          password: password,
          title: title,
          contents: contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeName} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>게ㅅㅣ글 등록하기</button>
    </div>
  );
}

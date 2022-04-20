import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import LoadBoxUI from "./Upload.presenter";
import { ModalError } from "../../utility";


const UPLOAD_FILE = gql`
mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
    url
    }
}
`;

interface IUploads01Props {
    index: number;
    fileUrl: string;
    defaultFileUrl?: string;
    onChangeFileUrls: (fileUrl: string, index: number) => void;
}

const checkValidationImage = (file: File | undefined) => {
    if (!file?.size) {
    ModalError({ content: "파일이 없습니다." });
    return false;
    }
    if (file.size > 5 * 1024 * 1024) {
        ModalError({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
        ModalError({
        content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
    });
    return false;
    }
    return file;
}



export default function LoadBox(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };
  

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
     ModalError({ content: "오류가 생겼습니다!" });
    }
  };

  return (
    <LoadBoxUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

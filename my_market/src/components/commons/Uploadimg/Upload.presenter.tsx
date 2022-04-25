import {
    UploadButton,
    UploadFileHidden,
    UploadImage} from "./Upload.styles"

import { ChangeEvent, RefObject } from "react";


interface IUploads01UIProps {
    fileRef: RefObject<HTMLInputElement>;
    fileUrl: string;
    defaultFileUrl?: string;
    onClickUpload: () => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}



export default function LoadBoxUI(props: IUploads01UIProps) {
    return (
    <>
        {props.fileUrl ? (
        <UploadImage
            onClick={props.onClickUpload}
            src={`https://storage.googleapis.com/${props.fileUrl}
            `}
            
           
        />
        ) : (
        <UploadButton type="button" onClick={props.onClickUpload}>
            <>+</>
        </UploadButton>
        )}
        <UploadFileHidden
            type="file"
            ref={props.fileRef}
            onChange={props.onChangeFile}
        />
        </>
    );
}

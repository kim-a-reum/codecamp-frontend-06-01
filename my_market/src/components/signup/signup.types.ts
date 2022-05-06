import { ChangeEvent } from "react";

export interface IMySignUpPageUIProps{
    onChangeEmail:(event: ChangeEvent<HTMLInputElement>) => void;
    onChangeName:(event: ChangeEvent<HTMLInputElement>) => void;
    onChangePass:(event: ChangeEvent<HTMLInputElement>) => void;
    onChangePass2:(event: ChangeEvent<HTMLInputElement>) => void;
    PutOk: () => void

    mailErr : any;
    nameErr : any;
    passErr : any;
    pass2Err : any;




}
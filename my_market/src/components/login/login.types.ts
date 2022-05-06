import { ChangeEvent } from "react";

export interface IMyLoginPageUIProps{
    onChangeEmail:(event: ChangeEvent<HTMLInputElement>) => void;
    onChangePass:(event: ChangeEvent<HTMLInputElement>) => void;

    onClickMain : () => void;
    onClickLogin : () => void;

    mailErr : any;
    passErr : any;





}
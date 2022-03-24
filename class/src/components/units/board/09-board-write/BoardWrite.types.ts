import { ChangeEvent } from "react"


//스타일타입 
export interface ISubmitButtonProps{
    isActive: boolean
}

//프리젠터 타입 

export interface IBoardWriteUIProps{
    onChangeWriter : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents : (event: ChangeEvent<HTMLInputElement>) => void
    OnClickCreate : () => void
    OnClickUpdate : () => void
    isActive : boolean
    isEdit : boolean
    data?: any //자바스크립트를 의미하는데, 데이터값 받아오는건 내일하자 ...... 그니까 오늘한건 오늘 다 이해하라는 뜻이다 
}
//컨테이너 타입 
export interface IBoardWriteProps{
    isEdit : boolean
    data? : any ///백엔드에서 가져오는 데이터는 자동으로 만들어주는게 있아! 
}

export interface IMyVariables{
    number : number
    writer? : string
    title?: string
    contents? : string
}
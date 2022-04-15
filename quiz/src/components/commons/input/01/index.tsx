
import styled from "@emotion/styled"
import { UseFormRegisterReturn } from "react-hook-form"

const Input = styled.input`
    font-size: 15px;

`

interface IProps {
    type:"text" | "password"
    register : UseFormRegisterReturn
    // 레지스터 안에서 뭐가어떻게 이루어지는지 우리는 모르니까 ! 
    
}

export default function Input01(props: IProps){
    return <Input type={props.type} {...props.register}/>
}
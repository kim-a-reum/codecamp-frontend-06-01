import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import styled from '@emotion/styled'
import Input01 from "../../src/components/commons/input/01"
import Button01 from "../../src/components/commons/button/01"

interface IFormValues {
    Writer?: string,
    Title?: string,
    Password?: string, 
    Contents?: string,
    // boardAddress?: {}
    // addressDetail?: string
}
const Error = styled.div`
        font-size: 9px;
        color: blue;
        height: 30px;
`
const schema = yup.object({
    
    Writer: yup.string().required("작성자는 필수 입력 사항입니다! ").max(5,"5자이내로 설정해주세요!"),
    Title: yup.string().required("제목은 필수 입력 사항입니다! ").max(100,"제목은 100자 이내 문자열입니다"),
    Contents: yup.string().required("내용도 필수 입력 사항입니다! ").max(1000,"내용은 1000자 이내로 입력해주세요"),
    Password: yup.string().required("비밀번호는 필수 입력 사항입니다 ").max(8,"비밀번호는 8자리 이내로 입력해주세요 ")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$/,{message:"영문/숫자/특수문자 포함, 8자리 이내로 입력해주세요"})
})

export default function ReactHookFormPage(){
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema),
        mode:"onChange",
    })
    const onClickSubmit = (data: IFormValues)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <Input01 type="text" register={register("Writer")}/>
        <Error>{formState.errors.Writer?.message}</Error>
        제목 : <Input01 type="text"  register={register("Title")}/>
        <Error>{formState.errors.Title?.message}</Error>
        내용 : <Input01 type="text" register={register("Contents")}/>
        <Error>{formState.errors.Contents?.message}</Error>
        비밀번호 : <Input01 type="password" register={register("Password")}/>
        <Error>{formState.errors.Password?.message}</Error>
        {/* 주소 : <input type="text"{...register("boardAddress.addressDetail")}/> */}
        <Button01 isActive={formState.isValid} title="등록하기"></Button01>
    </form>
    )
}



import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import styled from '@emotion/styled'
import Input01 from "../../src/components/commons/inputs/01"
import Button01 from "../../src/components/commons/buttons/01"

const Error = styled.div`
        font-size: 9px;
        color: blue;
`

// 아래 schema는 컴포넌트 분리시 .validation.ts 라는 파일로 보관하기 
const schema = yup.object({
    email: yup.string().email("이메일 형식이 적합하지 않습니다.").required("이메일은 필수 입력 사항입니다"),
    password: yup.string().min(4,"비밀번호는 최소 4자리 이상 입력하세요 ! ").max(15,"비밀번호는 최대 15자리로 입력해주세요 ").required("비밀번호는 필수 입력 사항입니다 ")
})
interface IFormValues {
    email?: string
    password?: string
    isActive? : boolean
    // boardAddress?: {}
    // addressDetail?: string

}

export default function ReactHookFormPage(){
    // const[isActive,setIsActive] = useState(false) 얘를 할필요가 없다 에러가없으면 폼에 있는 isvalid가 넘어간다 
    const {register, handleSubmit,formState} = useForm({
        resolver: yupResolver(schema),
        mode:"onChange",
    })
    const onClidkSubmit = (data: IFormValues)=>{
        console.log(data)


    }
    
    return(
        <form onSubmit={handleSubmit(onClidkSubmit)}>
            이메일 : 
            <Input01 mytype="text" myregister={register("email")}/>
            {/* <input type="text" {...register("email")}/> */}
            <Error>{formState.errors.email?.message}</Error>
            비밀번호 : 
            <Input01 mytype="password" myregister={register("password")}/>
            {/* <input type="text"{...register("password")}/> */}
            <Error>{formState.errors.password?.message}</Error>
            {/* 주소 : <input type="text"{...register("boardAddress.addressDetail")}/> */}
            <Button01 isActive={formState.isValid} title="로그인하기"/>
            {/* <LoginButton isActive={formState.isValid} >로그인하기</LoginButton> */}
        </form>
    )
}
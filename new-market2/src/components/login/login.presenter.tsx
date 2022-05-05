
import { useRouter } from "next/router"
import * as S from "./login.styles"
import { IMyLoginPageUIProps } from "./login.types"




export default function MyLoginPageUI(props : IMyLoginPageUIProps){
    const router = useRouter()

    const onClickSignUp = ()=>{
        router.push('/signup')
    }
    

    return (
        <div>
        
        <S.Body>
            <S.Wrapper>
                <S.LoginTitle>
                    <S.Big>로그인</S.Big>
                    <S.Small><br/>Login</S.Small>
                </S.LoginTitle>
                <S.EmailBox type={"text"} placeholder="아이디" onChange={props.onChangeEmail}/> 

                <S.EmailError>{props.mailErr}</S.EmailError>
                
                <S.PassWordBox type={"password"} placeholder="비밀번호" onChange={props.onChangePass}/>

                <S.PassWordError>{props.passErr}</S.PassWordError>

                
                <S.FinshButton onClick={props.onClickLogin}> 로그인</S.FinshButton>
                <S.SignupBox> 
                    <S.Text1>아직 계정이 없으신가요?</S.Text1>
                    <S.text2 onClick={onClickSignUp}>회원가입</S.text2>
                </S.SignupBox>
    
            </S.Wrapper>
        </S.Body>        
        
        </div>
    )

}


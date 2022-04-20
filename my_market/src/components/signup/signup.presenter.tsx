
import * as S from "./signup.styles"
import { IMySignUpPageUIProps } from "./signup.types"




export default function MySignUpPageUI(props : IMySignUpPageUIProps){


    return (
        <div>
        
        <S.Body>
            
            <S.Wrapper>
    
                <S.EmailBox type={"text"} placeholder="이메일을 입력해 주세요." onChange={props.onChangeEmail}/> 

                <S.EmailError>{props.mailErr}</S.EmailError>

                <S.NameBox type={"text"} placeholder="이름을 입력해 주세요."
                onChange={props.onChangeName}/>

                <S.NameError>{props.nameErr}</S.NameError>

                <S.PassWordBox type={"password"} placeholder="비밀번호를 입력해 주세요." onChange={props.onChangePass}/>

                <S.PassWordError>{props.passErr}</S.PassWordError>

                <S.PassWordBox2 type={"password"} placeholder="비밀번호를 다시 입력해 주세요."onChange={props.onChangePass2}/>
    
                <S.PassWordError2>{props.pass2Err}</S.PassWordError2>

                <S.FinshButton onClick={props.PutOk}>가입하기</S.FinshButton>
                
    
            </S.Wrapper>
        </S.Body>        
        
        </div>
    )

}


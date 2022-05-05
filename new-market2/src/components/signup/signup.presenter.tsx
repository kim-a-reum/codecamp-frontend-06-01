
import * as S from "./signup.styles"
import { IMySignUpPageUIProps } from "./signup.types"




export default function MySignUpPageUI(props : IMySignUpPageUIProps){

console.log(props.passErr)
    return (
        <div>
        
        <S.Body>
            
            <S.Wrapper>
                <S.Title>
                    <S.Big>회원가입</S.Big>
                    <S.Small><br/>Sign up</S.Small>
                </S.Title>
                
                <S.Logo>
                아이디
                <S.EmailBox type={"text"} placeholder="이메일 아이디를 @까지 정확하게 입력하세요" onChange={props.onChangeEmail}></S.EmailBox>
                </S.Logo>
                

                <S.EmailError>{props.mailErr}</S.EmailError>

                <S.Logo>
                비밀번호
                <S.PassWordBox type={"password"} placeholder="영문+숫자 조합 8-16자리를 입력해주세요" onChange={props.onChangePass}/>
                </S.Logo>

                <S.PassWordError>{props.passErr}</S.PassWordError>
                <S.Logo>
                    비밀번호 확인
                <S.PassWordBox2 type={"password"} placeholder="영문+숫자 조합 8-16자리를 입력해주세요" onChange={props.onChangePass2}/>
                </S.Logo>
    
                <S.PassWordError2>{props.pass2Err}</S.PassWordError2>
                <S.Logo>
                    이름
                <S.NameBox type={"text"} placeholder="Ex)홍길동"
                onChange={props.onChangeName}/>
                </S.Logo>

                <S.NameError>{props.nameErr}</S.NameError>
                <S.FinshBox>
                <S.FinshButton onClick={props.PutOk}>회원가입하기</S.FinshButton>
                <S.CancelButton onClick={props.PutCencel}>취소</S.CancelButton>
                </S.FinshBox>
                <S.SignupBox> 
                    <S.Text1>아직 아이디가 있으신가요?</S.Text1>
                    <S.text2 onClick = {props.GoLogin}>로그인</S.text2>
                </S.SignupBox>
                
    
            </S.Wrapper>
        </S.Body>        
        
        </div>
    )

}


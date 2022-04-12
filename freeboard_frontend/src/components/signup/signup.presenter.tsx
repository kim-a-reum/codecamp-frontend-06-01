
import * as S from "./signup.styles"
import { IMySignUpPageUIProps } from "./signup.types"




export default function MySignUpPageUI(props : IMySignUpPageUIProps){


    return (
        <div>
        
        <S.Body>
            <S.PhotoBox>
                <S.TopBox>

                    <S.PhotoContents>회원가입 좋아좋아!</S.PhotoContents>
                    <S.PhotoSide></S.PhotoSide>
                    <S.Photo></S.Photo>
                </S.TopBox>
                <S.BottomButton onClick={props.onClickMain}>😎 홈페이지 메인으로 🚀</S.BottomButton>
            </S.PhotoBox>
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



import * as S from "./login.styles"
import { IMyLoginPageUIProps } from "./login.types"




export default function MyLoginPageUI(props : IMyLoginPageUIProps){


    return (
        <div>
        
        <S.Body>
            <S.PhotoBox>
                <S.TopBox>

                    <S.PhotoContents>어서 로그인 해!</S.PhotoContents>
                    <S.PhotoSide></S.PhotoSide>
                    <S.Photo></S.Photo>
                </S.TopBox>
                <S.BottomButton onClick={props.onClickMain}>😎 홈페이지 메인으로 🚀</S.BottomButton>
            </S.PhotoBox>
            <S.Wrapper>
    
                <S.EmailBox type={"text"} placeholder="이메일을 입력해 주세요." onChange={props.onChangeEmail}/> 

                <S.EmailError>{props.mailErr}</S.EmailError>

                {/* <S.NameBox type={"text"} placeholder="이름을 입력해 주세요."
                onChange={props.onChangeName}/>

                <S.NameError>{props.nameErr}</S.NameError> */}

                <S.PassWordBox type={"password"} placeholder="비밀번호를 입력해 주세요." onChange={props.onChangePass}/>

                <S.PassWordError>{props.passErr}</S.PassWordError>

                
                <S.FinshButton onClick={props.onClickLogin}> 로그인하기</S.FinshButton>
                
    
            </S.Wrapper>
        </S.Body>        
        
        </div>
    )

}


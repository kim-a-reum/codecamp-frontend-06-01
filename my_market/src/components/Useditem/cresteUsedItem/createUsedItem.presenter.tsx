import { useRecoilState } from "recoil"
import { userInfoState } from "../../../commons/store"
import LoadBox from "../../commons/Uploadimg/Upload.container"

import 'react-quill/dist/quill.snow.css';
import * as S from "./createUsedItem.styled"
import dynamic from 'next/dynamic';

const ReactQuill = dynamic( () => import('react-quill'), {
    ssr : false
})


export default function CreateUsedItemPageUI(props : any){
    const [userInfo] = useRecoilState(userInfoState)


    return(
        <S.Body>
        <S.Wrapper>
            <S.ProductWrapper>
            <S.TitleName>판매자 이름 :  {userInfo.name}</S.TitleName>            
                <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <S.ProductDiv>
                <S.Title >상품명</S.Title>
                <S.Inputbox type = "text" placeholder="상품명을 입력해주세요" {...props.register("name")}/>
                <S.Title>상품 한줄 요약</S.Title>
                <S.Inputbox type = "text" {...props.register("remarks")} placeholder="상품을 간략히 표현해주세요"/>
                <S.Title>상품 정보</S.Title>
                {/* <S.InputBoxBig type = "text" {...props.register("contents")} placeholder="상품의 구매일자, 사용기한, 상태 등을 &#13;&#10; 상세히 입력해주세요"/> */}
                <ReactQuill
                onChange={props.onChangeContents}
                style={{ height: "300px" }}
                />
                <S.TitlePrice>상품 가격</S.TitlePrice>
                <S.Inputbox type = "text" {...props.register("price")} placeholder="숫자로만 작성해주세요"/>
                <S.Title>관련 태그</S.Title>
                <S.Inputbox type = "text" placeholder="#태그  #태그  #태그"/>
                <S.LocationBox>
                <S.LocationLeft>

                    <S.Title>거래 위치</S.Title>
                </S.LocationLeft>
                <S.LocationRight>
                    <S.Title> 상세 주소</S.Title>
                    <S.Inputbox />
                    <S.Inputbox />
                </S.LocationRight>
                </S.LocationBox>
                <S.Title>사진 첨부</S.Title>
                {/* <LoadBox/> */}

                </S.ProductDiv>
                <S.SubmitButton>상품 올리기</S.SubmitButton>
                </form>
            </S.ProductWrapper>

        </S.Wrapper>
        </S.Body>
    )
}



import { useRecoilState } from "recoil"
import { userInfoState } from "../../../commons/store"
import * as S from "./createUsedItem.styled"


export default function CreateUsedItemPageUI(props : any){
    const [userInfo] = useRecoilState(userInfoState)


    return(
        <>
        <S.Wrapper>
            <S.Left>            
                <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <S.Leftbody>
                <S.Title>상품명</S.Title>
                <S.Inputbox type = "text" {...props.register("name")}/>
                <S.Title>상품 정보</S.Title>
                <S.InputBoxBig type = "text" {...props.register("contents")} placeholder="상품의 구매일자, 사용기한, 상태 등을 &#13;&#10; 상세히 입력해주세요"/>
                <S.Title>상품 가격</S.Title>
                <S.Inputbox type = "text" {...props.register("price")} placeholder="숫자로만 작성해주세요"/>
                <S.Title>상품 상세내용</S.Title>
                <S.InputBoxBig type = "text" {...props.register("remarks")} placeholder="상품의 디테일, 하자를 상세히 입력해주세요"/>
                <S.SubmitButton>상품 올리기</S.SubmitButton>

                    </S.Leftbody>
                </form>
            </S.Left>
            <S.Right>
            <S.Title>판매자이름 <br/> : {userInfo.name}</S.Title>
            <S.Title> 상품 사진 올리기</S.Title>
            
            </S.Right>
        </S.Wrapper>
        </>
    )
}



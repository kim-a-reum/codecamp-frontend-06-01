import { useRecoilState } from "recoil"
import { userInfoState } from "../../../commons/store"
import LoadBox from "../../commons/Uploadimg/Upload.container"
import { v4 as uuidv4 } from "uuid";
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
                <S.Title> 상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
            <S.TitleName>판매자 이름 :  {userInfo.name}</S.TitleName>            
                <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <S.ProductDiv>
                <S.Title >상품명</S.Title>
                <S.Inputbox type = "text" placeholder="상품명을 입력해주세요" {...props.register("name")} defaultValue={props.data?.fetchUseditem.name}/>
                <S.Title>상품 한줄 요약</S.Title>
                <S.Inputbox type = "text" {...props.register("remarks")} placeholder="상품을 간략히 표현해주세요" defaultValue={props.data?.fetchUseditem.remarks}/>
                <S.Title>상품 정보</S.Title>
                <ReactQuill
                onChange={props.onChangeContents}
                style={{ height: "300px" }}
                defaultValue={props.data?.fetchUseditem.contents}
                />
                <S.TitlePrice>상품 가격</S.TitlePrice>
                <S.Inputbox type = "text" {...props.register("price")} placeholder="숫자로만 작성해주세요" defaultValue={props.data?.fetchUseditem.price}/>
                <S.Title>관련 태그</S.Title>
                <S.Inputbox type = "text" {...props.register("tags")} placeholder="#태그  #태그  #태그"/>
                <S.LocationBox>
                <S.LocationLeft>

                    <S.Title>거래 위치</S.Title>
                </S.LocationLeft>
                <S.LocationRight>
                    <S.Title> 상세 주소</S.Title>
                    <S.Inputbox {...props.register("address")}/>
                    <S.Inputbox />
                </S.LocationRight>
                </S.LocationBox>
                <S.Title>사진 첨부</S.Title>
                <S.PicturesLoad>

                {props.fileUrls.map((el : any, index : any)=>(
                    <LoadBox 
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                    />))}

                    </S.PicturesLoad>
                </S.ProductDiv>
                <S.SubmitButton type="submit" > {props.isEdit ? "수정" : "등록"}하기</S.SubmitButton>
                </form>
            </S.ProductWrapper>

        </S.Wrapper>
        </S.Body>
    )
}



import { useRecoilState } from "recoil"
import { accessTokenState} from "../../../commons/store"
import LoadBox from "../../commons/Uploadimg/Upload.container"
import { v4 as uuidv4 } from "uuid";
import 'react-quill/dist/quill.snow.css';
import * as S from "./createUsedItem.styled"
import dynamic from 'next/dynamic';
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useEffect} from "react";
const ReactQuill = dynamic( () => import('react-quill'), {
    ssr : false
})
declare const window: typeof globalThis & {
    kakao: any;
  };

export default function CreateUsedItemPageUI(props : any){
    useEffect(() => {
        const script = document.createElement("script"); 
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=58129ac07f6fdda65814d3d744bfb178&autoload=false&libraries=services";
        document.head.appendChild(script);
    
        script.onload = () => {
          window.kakao.maps.load(function () {
            const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new window.kakao.maps.LatLng(37.5386876, 127.0449142), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };  

            // 지도를 생성합니다    
            const map = new window.kakao.maps.Map(mapContainer, mapOption); 

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new window.kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
             geocoder.addressSearch(props.mapAddress ? props.mapAddress : '서울특별시 성동구 왕십리로 16', function(result : any, status: any) {

                // 정상적으로 검색이 완료됐으면 
                if (status === window.kakao.maps.services.Status.OK) {

                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: '<div style="width:150px; font-size: 15px; text-align:center;padding:6px 0;">여기서 거래해요</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
});    
          });
        };
      }, [props?.mapAddress]);
      props.seteditMapAddress(props?.mapAddress)

    return(
        <S.Body>
             {props.isOpen && (
        <Modal visible={true} 
        onCancel={props.onClickopenModal} 
        onOk={props.onClickopenModal}>
            주소 등록! 
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
        <S.Wrapper>
            <S.ProductWrapper>
                <S.TitleName> 상품 {props.isEdit ? "수정" : "등록"}</S.TitleName>

          
                <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <S.ProductDiv>
                <S.Column>

                    <S.Title >상품명</S.Title>
                    <S.Inputbox type = "text" placeholder="상품명을 입력해주세요" {...props.register("name")} defaultValue={props.data?.fetchUseditem.name}/>
                </S.Column>
                <S.Column>

                    <S.Title>상품 요약</S.Title>
                    <S.Inputbox type = "text" {...props.register("remarks")} placeholder="상품을 간략히 표현해주세요" defaultValue={props.data?.fetchUseditem.remarks}/>
                </S.Column>
                <S.Column>

                <S.Title>상품 내용</S.Title>
                <ReactQuill
                onChange={props.onChangeContents}
                style={{ width: "800px",height: "300px" }}
                value = {props.getValues("contents") || ""}
                />
                </S.Column>
                <br/><br/>
                <S.Column>

                    <S.Title>상품 가격</S.Title>
                    <S.Inputbox type = "text" {...props.register("price")} placeholder="숫자로만 작성해주세요" defaultValue={props.data?.fetchUseditem.price}/>
                </S.Column>
                <S.Column>
                
                <S.Title>태그 입력</S.Title>
                
                <S.Tag>
                    <S.TagTitle>태그 작성후 스페이스바를 누르시면 됩니다!</S.TagTitle>
                    <S.TagInputbox onKeyUp={props.onKeyUpHash} onClick={(event)=>{ event.stopPropagation();}}type = "text" {...props.register("tags")} placeholder="#태그  #태그  #태그"/>
                    { props?.hashArr?.map((el,idx)=>(
                        <S.TagBox key={idx} onClick={props.deleteTag}>{el}<br/></S.TagBox>
                        ))}
                </S.Tag>
                    </S.Column>
                <S.LocationBox>
                <S.LocationLeft>
                    <S.Title>거래 위치</S.Title>
                    <div id="map" style={{ width: 450, height: 400 }}></div>
                </S.LocationLeft>
                <S.LocationRight>
                    <S.SearchBox>
                        <S.Zipbox></S.Zipbox>
                        <S.AddressButton type= "button" onClick={props.onClickopenModal}>우편번호 검색</S.AddressButton>
                    </S.SearchBox>
                    <S.Addressbox>{props.addressData.address}</S.Addressbox>
                    <S.Inputbox {...props.register("addressdetail")}/>
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
                <S.Bottom>
                <S.CanCelButton type = "button" onClick={props.onClickCancel}>취소</S.CanCelButton>
                <S.SubmitButton type="submit" > {props.isEdit ? "수정" : "등록"}</S.SubmitButton>
                </S.Bottom>
                </form>
          
            </S.ProductWrapper>
        </S.Wrapper>
        </S.Body>
    )
}



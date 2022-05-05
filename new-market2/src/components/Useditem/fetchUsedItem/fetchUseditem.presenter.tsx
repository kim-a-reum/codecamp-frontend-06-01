import { Tooltip } from 'antd'
import { getDate } from '../../utility'
import 'antd/dist/antd.css'
import * as S from './fetchUseditem.styled'
import Dompurify from "dompurify"
import { useEffect } from 'react'
import FetchCommentsPage from '../fetchComment/fetchComment.container'
import CreateCommentPage from '../createComment/createComment.container'
import { useRecoilState } from 'recoil'

declare const window: typeof globalThis & {
  kakao: any;
};


export default function FetchUsedItemPageUI (props : any){


  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
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
         geocoder.addressSearch(props.data?.fetchUseditem?.useditemAddress?.address ? props.data?.fetchUseditem.useditemAddress.address : '서울특별시 성동구 왕십리로 16', function(result : any, status: any) {

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
  }, [props]);

console.log(props.data?.fetchUseditem.images)
return(
    <>
     <S.Body>
          <S.Wrapper>
            <S.Top>
              {props.data?.fetchUseditem.images[0] ?
            
            <S.RealImage
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}/>

                :
                <S.TopImage/>

            }
              <S.TopProfile>
                <S.TopRight>
                    <S.Title>
                    {props.data?.fetchUseditem.name}
                  </S.Title>
                  <S.LeftPrice>
                      {props.data?.fetchUseditem.price} <S.SmallPrice>원<br/></S.SmallPrice>
                      <S.WhiteBox></S.WhiteBox>
                      <S.CommentsEdit onClick = {props.onClickEdit}
                        ></S.CommentsEdit>
                         <S.CommentsDelete
                          id={props.data?.fetchUseditem._id}
                          onClick = {props.onClickDelete}
                            ></S.CommentsDelete>
                  </S.LeftPrice>
                  <S.Remark>
                  {props.data?.fetchUseditem?.remarks}
                    
                  </S.Remark>
                  <S.HashTag>
                  {(props.data?.fetchUseditem.tags.map((el,idx)=>(
                    <S.HashTagWord key={idx}>{el}</S.HashTagWord>
                  )))}
                  </S.HashTag>
                  <S.Hr></S.Hr>
                  <S.ButtonZip>
                    <S.ZzimButton onClick={props.onClicktoggle}>💛 찜 {props.data?.fetchUseditem?.pickedCount}</S.ZzimButton>
                      <S.Button onClick= {()=>props.onClickBasket(props.data?.fetchUseditem)}>장바구니</S.Button>
                      <S.ButtonBuy onClick = {props.onClickBuy}>바로구매</S.ButtonBuy>
                  </S.ButtonZip>
                </S.TopRight>
              </S.TopProfile>
            </S.Top>


            <S.Middle>
                <S.MiddleLeft>
                  <S.MiddleTop>
                    상품 상세 설명
                  </S.MiddleTop>
                  <S.MiddleContents>

                          {process.browser ? (
                            <div dangerouslySetInnerHTML={{
                              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
                            }}/>
                            ) : (<div/>)}

                  </S.MiddleContents>
                  <S.MiddleMap>
                    <S.MiddleImage></S.MiddleImage>
                    거래지역
                  </S.MiddleMap>
                  <div id="map" style={{ width: 600, height: 400 }}></div>
                         <br/>
                          거래희망장소 : {props.data?.fetchUseditem?.useditemAddress?.address}, {props.data?.fetchUseditem.useditemAddress?.addressDetail}
                          
                </S.MiddleLeft>
                      <S.MiddleRight>
                          <S.MiddleTop>상점정보</S.MiddleTop>
                          <S.MiddleUser>
                            <S.UserIcon></S.UserIcon>
                            <S.UserName>{props.data?.fetchUseditem?.seller?.name}</S.UserName>
                          </S.MiddleUser>
                          <CreateCommentPage></CreateCommentPage>
                          <FetchCommentsPage></FetchCommentsPage>
      
                      </S.MiddleRight>

            </S.Middle>
          </S.Wrapper>
        </S.Body>
    </>
)



}
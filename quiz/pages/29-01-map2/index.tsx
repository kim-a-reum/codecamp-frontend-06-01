import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=58129ac07f6fdda65814d3d744bfb178&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
        center: new window.kakao.maps.LatLng(37.5503029, 126.9221397), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        const imageSrc = 'https://media.istockphoto.com/vectors/angry-black-cat-face-with-big-eyes-on-the-peach-color-background-vector-id1177134546', // 마커이미지의 주소입니다    
        imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition =new window.kakao.maps.LatLng(
          37.5503029, 126.9221397
        ); // 마커가 표시될 위치입니다

        // 지도를 클릭한 위치에 표출할 마커입니다
          const marker = new window.kakao.maps.Marker({ 
              // 지도 중심좌표에 마커를 생성합니다 
          position: markerPosition,
          image: markerImage
            }); 
          // 지도에 마커를 표시합니다
          marker.setMap(map);
          
          window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
            // 클릭한 위도, 경도 정보를 가져옵니다 
            const latlng = mouseEvent.latLng; 
            
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            
            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
            
            const resultDiv = document.getElementById('clickLatlng'); 
            
            // resultDiv.innerHTML = message;
            // 
        });
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=58129ac07f6fdda65814d3d744bfb178"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}

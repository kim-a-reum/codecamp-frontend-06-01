
// import Script from "next/script";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script") // <script> 이태그를 만들어준거임 
    script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5 & autoload=false"
    document.head.appendChild(script)
    script.onload = ()=>{

    }

    script.onload = ()=>{
        window.kakao.maps.load(function (){

            const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
            const options = {
              // 지도를 생성할 때 필요한 기본 옵션
              center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
              level: 3, // 지도의 레벨(확대, 축소 정도)
            };
            const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 
        })
    }


  },[]);
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5"
        ></script>
      </Head> */}
      {/* <Script src=""/> */}
      <div>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </div>
    </>
  );
}


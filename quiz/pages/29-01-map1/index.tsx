// import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-01-map2");
  // };

  return (
    // <button onClick={onClickMoveToMap}>지도 이동하기</button>
    <Link href="/29-01-map2">
      <a>지도 이동하기</a>
    </Link>
    // <a href="//29-01-map2">지도 이동하기</a>
  );
}

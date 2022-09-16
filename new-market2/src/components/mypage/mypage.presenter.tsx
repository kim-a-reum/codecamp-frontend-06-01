import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import * as S from "./mypage.styled";
declare const window: typeof globalThis & { IMP: any };
// 로그인했을시만 성공시켜주는 검증부분

const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      amount
      balance
    }
  }
`;

export default function MyPageUI(props: any) {
  const [createpoint] = useMutation(CREATE_POINT);
  const router = useRouter();
  const [value, setValue] = useState(100);
  const [id, setId] = useState("");
  const onChangeMenu = (event: any) => {
    setValue(event.target.value);
    setId(event.target.options[event.target.selectedIndex].text);
    console.log(event.target.options);
  };

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 카드로 할거야라는뜻
        // merchant_uid: "ORD20180131-0000011",
        // 상품 아이디를 중복하지 않게 설정하고, 없으면 임의로 중복안되게 발생하게 하면 됨
        name: id,
        amount: value,
        buyer_email: "kimareum11@naver.com",
        buyer_name: "김아름",
        buyer_tel: "010-7720-7516",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          console.log(rsp.imp_uid);
          const result = createpoint({
            variables: { impUid: rsp.imp_uid },
          });
          // router.push('/')
          console.log(result);
        } else {
          console.log(rsp);
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };
  return (
    <S.Wrapper>
      <S.Top>
        <S.TopTitleMy>내 프로필</S.TopTitleMy>
        <S.TopTitle>포인트 충전</S.TopTitle>
        <S.TopTitle>내가 올린 상품</S.TopTitle>
      </S.Top>
      <S.Middle>
        <S.MiddleTitle>
          <S.Title>이름</S.Title>
          <S.Contents>
            {props?.data?.fetchUserLoggedIn.name}
            <br />
          </S.Contents>
        </S.MiddleTitle>
        <S.MiddleTitle>
          <S.Title>이메일</S.Title>
          <S.Contents>
            {props?.data?.fetchUserLoggedIn.email}
            <br />
          </S.Contents>
        </S.MiddleTitle>
        <S.MiddleTitle>
          <S.Title>포인트</S.Title>
          <S.Contents>
            {props?.data?.fetchUserLoggedIn.userPoint.amount} P<br />
            <br />
          </S.Contents>
        </S.MiddleTitle>
      </S.Middle>
      상품을 선택하고, 금액을 충전하시면 됩니다 ! <br />
      <br />
      <select onChange={onChangeMenu}>
        <option disabled={true} selected={true}>
          {" "}
          상품을 선택해주세요!
        </option>
        <option id="아름마켓 100포인트" value="100">
          500point{" "}
        </option>
        <option value="1000" id="아름마켓 1000포인트">
          1000point{" "}
        </option>
        <option value="2000" id="아름마켓 200포인트">
          2000point
        </option>
        <option value="5000" id="아름마켓 5000포인트">
          5000point{" "}
        </option>
      </select>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          async
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        />
        {/* <!-- iamport.payment.js --> */}
        <script
          async
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        />
      </Head>
      <br />
      <br />
      <button onClick={requestPay}> 상품 해당 금액 충전하기 </button>
      <br />
    </S.Wrapper>
  );
}

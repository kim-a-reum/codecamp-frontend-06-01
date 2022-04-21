import { useState } from "react";
import Head from 'next/head'
declare const window: typeof globalThis & {IMP: any;}



export default function PaymentPage(){
    const [amount,setAmount] = useState(100)

   
    
    const requestPay = () => {
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp07708581"); // Example: imp00000000
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay(
            { // param
        pg: "html5_inicis",
        pay_method: "card",
        // 카드로 할거야라는뜻 
        // merchant_uid: "ORD20180131-0000011",
        // 상품 아이디를 중복하지 않게 설정하고, 없으면 임의로 중복안되게 발생하게 하면 됨
        name: "향긋한 김아름 방구",
        amount: amount,
        buyer_email: "kimareum11@naver.com",
        buyer_name: "김아름",
        buyer_tel: "010-7720-7516",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment"
        }, (rsp : any) => { // callback
        if (rsp.success) {
            // 결제 성공 시 로직,
            console.log(rsp)
            // 백엔드에 결제관련 데이터 넘겨주기 = 뮤테이션 실행하기
            // createPointTransationOfLoading
            // newDate()로 만들어지는 시간이라 프론트에서는 뉴데이트안한다
        } else {

            alert('결제에 실패했습니다. 다시 시도해주세요!')

        }
        });
    }
    return(
        <>
        <Head>
        {/* <!-- jQuery --> */}
        <script 
        type="text/javascript" 
        src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        {/* <!-- iamport.payment.js --> */}
        <script 
        type="text/javascript" 
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>

        </Head>
        <button onClick={requestPay}>결제하기</button>
        </>
    )
}
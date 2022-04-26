import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head'

declare const window: typeof globalThis & {IMP: any;}
// 로그인했을시만 성공시켜주는 검증부분


const CREATE_POINT = gql`
    mutation createPointTransactionOfLoading($impUid: ID!){
        createPointTransactionOfLoading(impUid:$impUid){
            impUid
            amount
            balance

        }
    }
`

export default function MyPageUI(props :any){

    const [createpoint]=useMutation(CREATE_POINT)
    const router = useRouter()
    const [value,setValue] = useState(100)
    const [id,setId] = useState("")
    const onChangeMenu= (event: any) => {
        setValue(event.target.value)
        setId(event.target.options[event.target.selectedIndex].text)
        console.log(event.target.options)
    }    

    const requestPay = () => {
        
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // Example: imp00000000
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay(
            { // param
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
        m_redirect_url: "http://localhost:3000/main/mypage"
        }, async(rsp : any) => { // callback
        if (rsp.success) { 
            
            console.log(rsp)
            console.log(rsp.imp_uid)
            createpoint({
                variables:{impUid : rsp.imp_uid}
            })
            router.push('/main/mypage')
            
        } else {
            console.log(rsp)
            alert('결제에 실패했습니다. 다시 시도해주세요!')
        }
        });
    }
    console.log(props.data2)
    return (
    
    <>
    내 이름 : {props?.data?.fetchUserLoggedIn.name}<br/>
    내 이메일 : {props?.data?.fetchUserLoggedIn.email}<br/>
    내 포인트 : {props?.data?.fetchUserLoggedIn.userPoint.amount}<br/><br/>
    상품을 선택하고, 금액을 충전하시면 됩니다 ! <br/><br/>
        <select onChange={onChangeMenu}>
            <option disabled = {true} selected = {true} > 상품을 선택해주세요!</option>
            <option id= "아름마켓 500포인트" value="500"  >500point </option>
            <option value="1000" id= "아름마켓 1000포인트">1000point </option>
            <option value="2000" id= "아름마켓 200포인트">2000point</option>
            <option value="5000" id= "아름마켓 5000포인트">5000point </option>
         </select>
         <Head>
        {/* <!-- jQuery --> */}
        <script
        type="text/javascript" async
        src="https://code.jquery.com/jquery-1.12.4.min.js"/>
        {/* <!-- iamport.payment.js --> */}
        <script async
        type="text/javascript" 
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"/>
        
         

        </Head><br/><br/>
         <button onClick={requestPay}> 상품 해당 금액 충전하기 </button><br/><br/>
         ---내가 산 상품목록---<br/><br/>
         {props?.data2?.fetchUseditemsIBought.map((el: any)=>(

            <div key={el._id}>
                상품 이름 : {el.name}<br/>
                상품 가격 : {el.price}<br/>
                <br/>
                <br/>
                <br/>
            </div>

         ))}


    </>
    
    
    )
}
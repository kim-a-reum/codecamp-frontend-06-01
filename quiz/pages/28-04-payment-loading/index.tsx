import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from 'next/head'

declare const window: typeof globalThis & {IMP: any;}
// 로그인했을시만 성공시켜주는 검증부분
const useAuth=()=>{
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용가능합니다 !! ")
            router.push("./28-04-payment-login")
        }
    },[])
}
// const UPDATE_USER = gql`
//     mutation updateUser($updateUserInput: UpdateUserInput!){
//         updateUser(updateUserInput: $updateUserInput){
//             _id
//             email
//             name
//             userPoint

//         }
//     }
// `

export default function LoginLoadPage(){
    useAuth()
    const router = useRouter()
    // const [updateUser] = useMutation(UPDATE_USER)
    const [value,setValue] = useState(100)
    const [id,setId] = useState("")
    const onChangeMenu= (event) => {
        setValue(event.target.value)
        // setId(String(event.target.id))
        setId(event.target.options[event.target.selectedIndex].text)
        console.log(event.target.options)
    }    
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
        name: id,
        amount: value,
        buyer_email: "kimareum11@naver.com",
        buyer_name: "김아름",
        buyer_tel: "010-7720-7516",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-04-payment-complete"
        }, async(rsp : any) => { // callback
        if (rsp.success) {
            
            console.log(rsp)
        //   결제완료시 로직
            router.push('./28-04-payment-complete')
            // 백엔드에 결제관련 데이터 넘겨주기 = 뮤테이션 실행하기
            // createPointTransationOfLoading
            // newDate()로 만들어지는 시간이라 프론트에서는 뉴데이트안한다
        } else {
            console.log(rsp)
            alert('결제에 실패했습니다. 다시 시도해주세요!')
        }
        });
    }
    return (
        <>
       
        상품을 선택하고, 금액을 충전하시면 됩니다 ! <br/>
        <select onChange={onChangeMenu}>
            <option disabled = {true} selected = {true} > 상품을 선택해주세요!</option>
            <option id= "감귤즙" value="500"  >500원 감귤즙😊 </option>
            <option value="1000" id= "허쉬초콜릿">1000원 허쉬초콜릿😐 </option>
            <option value="2000" id= "졸음깨는껌">2000원 졸음깨는껌😢</option>
            <option value="5000" id= "찬스권">5000원 즉시귀가 찬스권🤬 </option>
         </select>
         <Head>
        {/* <!-- jQuery --> */}
        <script 
        type="text/javascript" 
        src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        {/* <!-- iamport.payment.js --> */}
        <script 
        type="text/javascript" 
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js">
            </script> 
         

        </Head>
         <button onClick={requestPay}> 상품 해당 금액 충전하기 </button>
        </>
    )
}
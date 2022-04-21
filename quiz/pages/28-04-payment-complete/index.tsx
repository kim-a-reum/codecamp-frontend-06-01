import { useRouter } from "next/router"

export default function PaymentCompletePage(){
    const router = useRouter()

const onClickMenu = ()=>{
    router.push('./28-04-payment-loading')
}
    return (
        <>
        <div>
            결제완료하셨습니다 
        </div>
        <button onClick={onClickMenu}>메뉴페이지로 돌아가기</button>
        </>
    )
}
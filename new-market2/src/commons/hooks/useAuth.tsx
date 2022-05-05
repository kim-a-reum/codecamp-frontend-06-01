import { attachTypeApi } from "antd/lib/message";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { ModalError } from "../../components/utility";
import { accessTokenState} from "../store";

export function NouseAuth(){
    const router = useRouter()
    
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)

    useEffect(()=>{
        if(!accessToken){
            ModalError({content:"로그인 후 이용가능합니다 ! "})
        router.push("/")
        }
    },[])
}
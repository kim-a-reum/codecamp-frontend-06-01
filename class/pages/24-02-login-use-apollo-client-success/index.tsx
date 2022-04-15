
import { useRecoilState } from "recoil"
import { userInfoState } from "../../src/commons/store"
import { withAuth } from "../../src/components/commons/hocs/withAuth"



function LoginSuccessPage(){
    const [userInfo] = useRecoilState(userInfoState)
    return (
        <>
        <div>{userInfo.name}님 어서오세욧 ! </div>
        
        </>
    )
}

export default withAuth(LoginSuccessPage)
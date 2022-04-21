
import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"
interface IFormValues {
    email? : string,
    password?: string, 
    
}

const LOGIN_USER = gql`
    mutation loginUser($password: String!, $email: String!){
        loginUser(email:$email,password:$password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const [,setAccessToken] = useRecoilState(accessTokenState)
    const router = useRouter()
    const [loginUser] = useMutation(LOGIN_USER)
    const {register, handleSubmit, formState} = useForm({
        mode:"onChange",
    })
    const onClickSubmit = async(data: IFormValues)=>{
        try{
            const result =  await loginUser({
                variables:{
                    email: data.email,
                    password: data.password
                  }
              })
              const accessToken = result.data.loginUser.accessToken
              setAccessToken(accessToken)
              localStorage.setItem("accessToken",accessToken)
            //   Modalsuccess({content:"로그인성공"})
            alert('로그인성공')
            router.push('./28-04-payment-loading')
      
          } catch (error){
              alert("무언가가 잘못되었다")
          } 
    }

    return (
       <form onSubmit={handleSubmit(onClickSubmit)}>
            아이디 : <input type="text" {...register("email")}/>
            비밀번호 : <input type = "password" {...register("password")}/>
            <button >로그인하기</button>
       </form>


   )
}
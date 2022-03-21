import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'

const CREATE_PROFILE = gql`
        mutation createProfile ( $name:String, $age:Int, $school:String){
            createProfile(
                name : $name , age : $age, school : $school)
                {_id
                number
                message }
        }

`



export default function GraphqlProfilePage(){
    const[myname,setMyName] = useState("")
    const[myage,setMyAge] = useState("")
    const[myschool,setMySchool] = useState("")
    const [data,setData] = useState("")
    const onChangeName = (event) => {
        setMyName(event.target.value)
    }
    const onChangeAge = (event) => {
        setMyAge(Number(event.target.value))
    }
    const onChangeSchool = (event) => {
        setMySchool(event.target.value)
    }
    const [callApi] = useMutation(CREATE_PROFILE)
    const callGrapphqlApi = async () => {
        const result = await callApi({
            variables : { name : myname, age : myage, school : myschool}
        })
        console.log(result)
        console.log(result.data.createProfile.message)
        setData(result.data.createProfile.message)
            




    }
    
    
    return(
        <div> 
        
        이름 : <input type="text" onChange={onChangeName}/><br/>
        나이 : <input type="text" onChange={onChangeAge}/><br/>
        학교 : <input type="text" onChange={onChangeSchool}/><br/>
        <button onClick={callGrapphqlApi}> GRAPHQL_API 요청하기 ! </button>
        
        
        </div>

    )
}
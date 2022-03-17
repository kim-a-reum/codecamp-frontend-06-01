// import axios from "axios"
// import {useState} from 'react'

import { useMutation } from "@apollo/client"

// import { useState } from "react"

// export default function Mypage(){
//     const [contents,Mycontents] = useState("")
//     const callRestApi = async () => {
//         const hello = await axios.get("https://koreanjson.com/posts/2")
//         console.log(hello)
//         console.log(hello.data.id)
//         Mycontents(hello.data.id)

//     }
//     return (
//         <div>
//             <div>{contents}</div>
//             <button onClick={callRestApi}> REST_API 요청하기 !</button>

//         </div>
//     )

// }
///////////////////REST_API 방식


// import { useState } from "react"
// import { useMutation,gql } from "@apollo/client"
// const Create_board = gql`
//         mutation {   
//             createBoard(     
//                 writer : "배고프당...",    
//                 title : "이제 곧 점심시간~",     
//                 contents : "123 "  ) 
//             {     _id     
//                 number    
//                 message    } }
// `


// export default function Graphql(){
    
//     const[myContents,setmyContents] = useState("")
//     const [callAPi] = useMutation(Create_board)
//     const letsStart = async () => {
        
//         const result = await callAPi()
//         console.log(result.data.contents)
//         setmyContents(result.data.contents)
    
// }
//     return(
//     <div>
//         <div>{myContents}</div>
//         <button onClick={letsStart}>grahpql 불러오기</button>


//     </div>
// )

// }
////////////////////////graphql 방식

import axios from 'axios'
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'



const CREATE_PRODUCT = gql`

mutation createProfile(
    $seller: String, 
    $createProductInput: CreateProductInput!)
                    {createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }


`
export default function enRollPage(){
const [createProfile] = useMutation(CREATE_PRODUCT)
const onClickSubmit = async () => {
    await createProfile({
        variales: {
            seller : "아름",
            createProductInput:{
                name: "마우스",
                detail: "좋은마우스",
                price: 2000
            }
        }
    })


}



    return(
        <>   
            판매자이름: <input type="text" /><br />
            나의이름: <input type="text" /><br />
            나의내용: <input type="text" /><br />
            나의가격: <input type="text" /><br />
            <input type="number" />
            <button onClick={onClickSubmit}>상품 등록하기</button>
            
        </>

    )

}




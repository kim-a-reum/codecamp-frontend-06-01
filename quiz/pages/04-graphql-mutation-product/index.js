import axios from 'axios'
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, 
        createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct(){

    const[myseller, setMySeller] = useState("")
    const[myname, setMyName] = useState("")
    const[mydetail, setMyDetail] = useState("")
    const[myprice, setMyPrice] = useState("")

    const [data,setData] = useState("")

    const onChangeSeller = (event) => {
        setMySeller(event.target.value)}

    const onChangeName= (event) => {
        setMyName(event.target.value)}

    const onChangeDetail = (event) => {
        setMyDetail(event.target.value)}

    const onChangePrice = (event) => {
        setMyPrice(event.target.value)}


    const [callApi] = useMutation(CREATE_PRODUCT)
    const onClickSubmit = async () => {        
            const result = await callApi({ 
                variables: { seller : myseller,
                    createProductInput: {name : myname,
                        detail : mydetail,
                        price : Number(myprice) }
                            }
        })

        console.log(result)
        console.log(result.data.createProduct.message)
        setData(result.data.createProduct.message)
    }

    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangePrice}/><br />
            <input type="number" />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )

}
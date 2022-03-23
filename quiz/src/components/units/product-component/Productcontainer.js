//제품 등록, 수정 페이지의 컨테이너
import { useState } from 'react'
import { useMutation, gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_PRODUCT } from './Productquries'
import { UPDATE_PRODUCT } from './Productquries'
import ProductUI from './Productpresenter'



export default function ProductPage(props){
    const router = useRouter()
    const [Writer, setWriter] = useState("")
    const [Product, setProduct]= useState("")
    const [Contents, setContents] = useState("")
    const [Price, setPrice] = useState("")

    const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)


    const OnClickCreate = async () => {

        try { 
            const result = await createProduct({
                variables: { seller: Writer, createProductInput : {name: Product, detail : Contents, price : Number(Price)}  }
            })
            console.log(result.data)
            console.log(result.data.createProduct)
            alert("상품 등록에 성공했어요!")
            alert("상세 페이지로 이동해볼까요?!")    
            router.push(`/08-product/${result.data.createProduct._id}`) 
        } catch(error){

                alert(error.message)}
    }

    const OnClickUpdate = async () => {

        try { 
            const result = await updateProduct({
                variables: { productId: router.query.id, seller: Writer, updateProductInput : {
                    name: Product, 
                    detail : Contents, 
                    price : Number(Price)}  
                }
            })
            console.log(result.data)
            console.log(result.data.createProduct)
            alert("상품 수정에 성공했어요!")
            alert("상세 페이지로 이동해볼까요?!")    
            router.push(`/08-product/${router.query.id}`) 
        } catch(error){

                alert(error.message)}
    }





    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeProduct = (event) => {
        setProduct(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    
    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    return (<ProductUI
            onChangeWriter={onChangeWriter}
            onChangeProduct={onChangeProduct}
            onChangeContents={onChangeContents}
            onChangePrice={onChangePrice}
            OnClickCreate={OnClickCreate}
            OnClickUpdate={OnClickUpdate}
            isEdit={props.isEdit}

    
    />

    )

}
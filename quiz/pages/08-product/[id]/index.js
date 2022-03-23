//제품 상세조회 페이지 

import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FETCH_PRODUCT = gql`
query fetchProduct($productId:ID) {
    fetchProduct(productId:$productId) {
        _id
        seller
        name
        detail
        price
    }
    } 
`;

export default function ProductFetchPage() {
    const router = useRouter()
    console.log(router)
    console.log(router.data)


    const { data } = useQuery(FETCH_PRODUCT, {
    variables: {productId:router.query.id}
    //폴더이름이랑 맞춰노라고 ㅡㅡ 
    })

    console.log(data)
    
    const OnClickMove = () => {
        router.push(`/08-product/${router.query.id}/edit`)
    }
    return (
    <div>
        <div>{data?.fetchProduct._id}번 게시글에 오신 것을 환영합니다!!</div>
        <div>판매자: {data?.fetchProduct.seller}</div>
        <div>상품명: {data?.fetchProduct.name}</div>
        <div>상품내용: {data?.fetchProduct.detail}</div>
        <div>상품가격: {data?.fetchProduct.price}</div>
        <button onClick = {OnClickMove}>상품 수정 하기 ! </button>
    </div>
    );
}
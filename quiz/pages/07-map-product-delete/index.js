import {useQuery,gql,useMutation} from '@apollo/client'
import styled from '@emotion/styled'

const PRODUCT_FETCH = gql`
    query fetchProducts{
            fetchProducts{
                _id
                seller
                name
                detail
                price}
    }
`
const DELETE_PRODUCT = gql`
    # mutation 적어줄때 API랑 똑같이 복사해와서 앞에 써주고 받아오는것 앞에 부분은 
    # variables랑 맞춰주기 맨날 헷갈려!! 
    mutation deleteProduct($productId:ID) {
            deleteProduct(productId:$productId){
                _id
                number
                message
            }
    }

`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Column = styled.div`
    width: 25%;
`

export default function ProductfetchPage(){
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const {data} = useQuery(PRODUCT_FETCH)
    console.log(data)
    const onClickDelete = (event) => {
        deleteProduct({
            variables:{ productId :String(event.target.id)},
            refetchQueries:[{query:PRODUCT_FETCH}]
        })
    }

    return(
    <>
        {data?.fetchProducts.map( (el) => (
            <Row key = {el._id}>
            <Column><input type = "checkbox"/></Column>
            <Column>{el.seller}</Column>
            <Column>{el.name}</Column>
            <Column>{el.detail}</Column>
            <Column>{el.price}</Column>
            <Column>
                <button id = {el._id} onClick={onClickDelete}> 삭제 </button>
            </Column>
        </Row>
        )   )}
    
    </>
    )



}
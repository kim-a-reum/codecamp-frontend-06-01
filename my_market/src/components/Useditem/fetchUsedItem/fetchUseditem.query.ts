import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!){
        fetchUseditem(useditemId:$useditemId){
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
            useditemAddress {
                    zipcode
                    address
                    addressDetail
                            }
            buyer {
                    _id
                    email
                    name
                    picture
                    }
            seller {
                _id
                email
                name
            picture
                }
            soldAt
            createdAt

        }
    }
`

export const TRANSACTION_OF_BUYING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!){
        createPointTransactionOfBuyingAndSelling(useritemId:$useritemId){
            soldAt

        }
    }

`
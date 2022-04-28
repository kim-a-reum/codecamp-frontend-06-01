import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!){
        createUseditem(createUseditemInput:$createUseditemInput){
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
                    lat
                    lng
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
                }
            soldAt
            createdAt
            updatedAt
        }

    }
`

export const UPDATE_USED_ITEM = gql`
    mutation updateUseditem($updateUseditemInput: UpdateUseditemInput! $useditemId: ID!){
        updateUseditem(updateUseditemInput:$updateUseditemInput,useditemId:$useditemId){
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
                }
            soldAt
            createdAt
            updatedAt
        }

    }
`


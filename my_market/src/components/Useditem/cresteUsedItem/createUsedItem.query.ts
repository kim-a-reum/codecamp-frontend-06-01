import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    createUseditem($createUseditemInput: CreateUseditemInput!){
        createUseditem(createUseditemInqut:$createUseditemInput){
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

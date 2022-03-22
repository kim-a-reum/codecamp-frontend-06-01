import {gql} from '@apollo/client'



export const CREATE_BOARD = gql`
mutation CreateBoard
($createBoardInput:CreateBoardInput!){
  createBoard(createBoardInput: $createBoardInput) { 
  _id
  title
  contents
  likeCount
  dislikeCount
  createdAt
  updatedAt
} 
}`
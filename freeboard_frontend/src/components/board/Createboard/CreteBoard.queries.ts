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

export const UPDATE_BOARD = gql`
mutation updateBoard(
$updateBoardInput: UpdateBoardInput! $password:String $boardId:ID!
){ updateBoard(updateBoardInput: $updateBoardInput, password:$password,boardId: $boardId ) { 
  _id
  writer
  title
  contents
  createdAt
  updatedAt
} 
}`
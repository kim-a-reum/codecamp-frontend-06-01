import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createBoardCommentInput(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID! $page: Int) {
    fetchBoardComments(boardId: $boardId page:$page) {
      _id
      writer
      rating
      contents
      createdAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const UPDATE_BOARD_COMMENT = gql`

  mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput! $password: String $boardCommentId: ID!){
    updateBoardComment(
      updateBoardCommentInput:$updateBoardCommentInput
      password:$password
      boardCommentId:$boardCommentId
    ){
      _id
      writer
      contents
      rating
      
    }
  }
`

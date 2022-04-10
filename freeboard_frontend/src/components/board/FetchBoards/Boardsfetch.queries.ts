import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page :Int){
        fetchBoards(search : $search, page : $page ){
                _id
                writer
                title
                contents
                createdAt
                likeCount
                createdAt
                youtubeUrl


                }
    }

`
export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId:ID!){
        deleteBoard(boardId:$boardId)
        

    }
`
export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount{
        fetchBoardsCount
    }
`
export const FETCH_BOARDS_BEST = gql`
query{
  fetchBoardsOfTheBest{
   		_id
        writer
        title
        contents
        youtubeUrl
        likeCount
        createdAt
    
  }
  
}
    
`
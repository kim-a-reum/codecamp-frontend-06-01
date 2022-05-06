import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput!,$useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput,useditemId: $useditemId
    ) {
      _id
      contents
    #   useditem{
    #       _id
    #       name
    #       remarks
    #       contents
    #       tags
    #       images
    #       createdAt
    #       updatedAt
    #       deletedAt
    #   }
      user{
          _id
          email
          name
    #       userPoint{
    #           _id
    #           amount
    #           user
    #           createdAt
    #           updatedAt
    #           deletedAt
    #       }
    #       picture
    #       createdAt
    #       updatedAt
    #       deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
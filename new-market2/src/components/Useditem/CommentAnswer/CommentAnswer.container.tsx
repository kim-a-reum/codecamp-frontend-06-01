import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { ModalError, Modalsuccess } from "../../utility";
import { FETCH_COMMENT_ANSWERS } from "../fetchComment/fetchComment.presenter";
import { FETCH_USED_ITEM_COMMENTS } from "../fetchComment/fetchComment.query";
import CommentAnswerUI from "./CommentAnswer.presenter";

const CREATE_COMMENT_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput! $useditemQuestionId: ID!){
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput,useditemQuestionId:$useditemQuestionId ){
            _id
            contents
            
        }
    }

`

export default function CommentAnswerPage(props){ 
    const [contents, setMyContents] = useState("");
    const [createCommentAnswer] =useMutation(CREATE_COMMENT_ANSWER)
    const router = useRouter()

    const onChangeContents = (event)=>{
        setMyContents(event.target.value);
    }

    const onClickCreate = async () => {
      
        if(contents === ""){
           ModalError({content:"답변 내용을 입력해주세요"}) 
           return; } 
           try{
             const result = await createCommentAnswer({
               variables:{ createUseditemQuestionAnswerInput :{contents},
               useditemQuestionId: String(props._id)},
               refetchQueries: [
                 {
                   query: FETCH_COMMENT_ANSWERS,
                   variables: { useditemQuestionId: String(props._id)},
                 },
               ],
             });
               Modalsuccess
               ({content: "답변을 등록했어요"})
               setMyContents("");
             }catch(error){
               ModalError({content:"답변등록이 잘못되었어요"})
             }
         
     }


    return(
        <CommentAnswerUI
        onChangeContents={onChangeContents}
        onClickCreate={onClickCreate}
        contents={contents}

            />
    )
}
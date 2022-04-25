import { useMutation, useQuery } from "@apollo/client";
import { result } from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_USED_ITEM } from "../../../../pages/main/[itemid]/edit";
import { ModalError } from "../../utility";
import CreateCommentPageUI from "./createComment.presenter";
import { CREATE_COMMENT } from "./createComment.queries";

export default function CreateCommentPage(){
    const router = useRouter()
    const [createComment] = useMutation(CREATE_COMMENT)
    const [contents, setMyContents] = useState("");
    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query.itemid) },
      });


    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value);
      };
    const onClickCreate = async () => {
       if(contents === ""){
          ModalError({content:"질문 내용을 입력해주세요"}) 
          return; } 
        const result = await createComment({
             variables:{ createUseditemQuestionInput :{contents},
            useditemId: String(router.query.itemid)}});
        
          setMyContents("");
        console.log(result)
    }
    return (
    <CreateCommentPageUI
        onChangeContents={onChangeContents}
        onClickCreate={onClickCreate}
        contents={contents}
        data={data}
    />
    
    )
}
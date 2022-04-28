import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { FETCH_USED_ITEM } from "../../../../pages/main/[itemid]/edit";
import { ModalError, Modalsuccess } from "../../utility";
import { FETCH_USED_ITEM_COMMENTS } from "../fetchComment/fetchComment.query";
import CreateCommentPageUI from "./createComment.presenter";
import { CREATE_COMMENT } from "./createComment.queries";



export default function CreateCommentPage(){
  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem("userInfo") || "[]");
    setuser(users)

  },[])
    const [user,setuser] =useState()
    const router = useRouter()
    const [createComment] = useMutation(CREATE_COMMENT)
    const [contents, setMyContents] = useState("");
    const { data} = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query.itemid) },
      });
    

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
      
        setMyContents(event.target.value);
      };
    const onClickCreate = async () => {
      
       if(contents === ""){
          ModalError({content:"질문 내용을 입력해주세요"}) 
          return; } 
          try{
            const result = await createComment({
              variables:{ createUseditemQuestionInput :{contents},
              useditemId: String(router.query.itemid)},
              refetchQueries: [
                {
                  query: FETCH_USED_ITEM_COMMENTS,
                  variables: { useditemId: String(router.query.itemid)},
                },
              ],
            });
              Modalsuccess({content: "댓글을 등록했어요"})
              setMyContents("");
            }catch(error){
              ModalError({content:" 댓글 등록이 잘못되었어요"})
            }
        
    }
    return (
    <CreateCommentPageUI
        onChangeContents={onChangeContents}
        onClickCreate={onClickCreate}
        contents={contents}
        data={data}
        user={user}
    />
    
    )
}
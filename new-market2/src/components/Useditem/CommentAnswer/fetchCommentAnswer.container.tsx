import { gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from "react"
import { ModalError } from "../../utility"
import { EditPage } from "../createComment/createComment.styled"
import { FETCH_COMMENT_ANSWERS } from "../fetchComment/fetchComment.presenter"

export const CommentsAnswerBox = styled.div`
width: 100%;
height: 55px;
margin-top: 10px;
margin-bottom: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: lightyellow;
border-radius: 20px;

`

export const CommentsEditBox = styled.div`
      width: 60px;

`
export const CommentsEditBox2 = styled.input`
      width: 55%;
      height: 40px;

`
export const EditEditButton = styled.button`
      width: 15%;
      height: 40px;
      font-size:13px;
      border: none;
      background-color: #FFE004;
      font-weight: 900;
      cursor: pointer;

`
export const EditButton = styled.button`
      width: 30px;
      height: 30px;
      border: none;
      background-image: url('../../../../edit.png');
      background-color: lightyellow;
      background-repeat: no-repeat;
      cursor: pointer;

`
export const DeleteButton = styled.button`
      width: 30px;
      height: 30px;
      margin-top: 2px;
      border: none;
      background-image: url('../../../../delete.png');
      background-color: lightyellow;
      background-repeat: no-repeat;
      cursor: pointer;

`

export const DELETE_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!){
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
  }

`
export const EDIT_ANSWER = gql`
    mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput:UpdateUseditemQuestionAnswerInput!$useditemQuestionAnswerId: ID!){
        updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput,
            useditemQuestionAnswerId:$useditemQuestionAnswerId){
                _id
            }
    }

`
export default function CommentAnswerFetchPage(props){
    const [isDetailEdit,setisDetailEdit] =useState(false)
    const [editContents, setEditContents] =useState("")
    const [editAnswer] = useMutation(EDIT_ANSWER)
    const [deleteAnswer] = useMutation(DELETE_ANSWER)
    const onClickAnswerDelete =(event)=>{
        try{
  
          deleteAnswer({variables: {useditemQuestionAnswerId : event.target.id},
            refetchQueries: [
              {
                  query: FETCH_COMMENT_ANSWERS,
                  variables: { useditemQuestionId : props.el2._id },
              },
          ],
           }
           )
           
        }catch(error){
          ModalError({content:"본인 답변만 삭제 가능합니다"})
        }
  
      }
      const onClickAnswerEdit =()=>{
        setisDetailEdit(true)
  
        
      }
      const onChangeEdit = (event)=>{
        setEditContents(event.target.value)

      }
      const onClickEdit = ()=>{
        if(editContents === ""){
            ModalError({content: "댓글 수정을 해주세요"})
            return;
        }
        try{
            editAnswer({
                variables:{
                    useditemQuestionAnswerId : props.el._id,
                    updateUseditemQuestionAnswerInput :{
                        contents: editContents
                    }
                },
                refetchQueries:[
                    {
                        query: FETCH_COMMENT_ANSWERS,
                        variables:{
                            useditemQuestionId : props.el2._id
                        }
                    }
                ]
                
            })
            setisDetailEdit(false)
        }catch(error)
        {
        ModalError({content: " 댓글 답변 수정 실패! 아쉽군요"})
        }   

        

      }

return(
    <>
{isDetailEdit
?

<CommentsAnswerBox key={props.el._id}>
    <div> {props.el?.user.name} :</div>
        <CommentsEditBox2 defaultValue = {props?.el?.contents} onChange={onChangeEdit}/>
        <EditEditButton onClick={onClickEdit}>수정</EditEditButton>
  </CommentsAnswerBox>

:
    <CommentsAnswerBox key={props.el._id}>
    <div> {props.el?.user.name} : {props.el?.contents} </div>
        <CommentsEditBox>
            <EditButton onClick={onClickAnswerEdit}/>
            <DeleteButton id={props.el._id} onClick={onClickAnswerDelete}
            />
        </CommentsEditBox>
  </CommentsAnswerBox>
        }
          
    </>



)
}
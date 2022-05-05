import { gql, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ModalError, Modalsuccess } from '../../utility'
import CommentAnswerPage from '../CommentAnswer/CommentAnswer.container'
import CommentAnswerFetchPage from '../CommentAnswer/fetchCommentAnswer.container'
import { FETCH_USED_ITEM_COMMENTS, UPDATE_USED_ITEM_QUESTION } from './fetchComment.query'
import * as S from './fetchComment.styled'

export const FETCH_COMMENT_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int $useditemQuestionId: ID!){
    fetchUseditemQuestionAnswers(page:$page, useditemQuestionId:$useditemQuestionId){
      contents
      _id
      user{
        name
      }
    }
  }
`


export default function FetchCommentsPageUI(props : any){
    const router = useRouter()
    const [isEdit,setisEdit] = useState(false)
    const [editContents,setEditContents] = useState("")
    const [editcomment] = useMutation(UPDATE_USED_ITEM_QUESTION)
    const {data} = useQuery(FETCH_COMMENT_ANSWERS,{
      variables:{useditemQuestionId: props.el._id}
    })


    const onClickEdit = (event : any)=>{
      console.log(event.target.id)
        setisEdit(true)
    }
    const onChangeEditContents = (event: any)=>{
        setEditContents(event.target.value)
    }
    const onClickSubmit = async (event : any)=>{

      if(editContents === ""){
        ModalError({content: "댓글 수정을 해주세요"})
        return;
      }
        try{
            const result = await editcomment({
                variables:{
                    updateUseditemQuestionInput : {
                        contents: editContents,},
                        useditemQuestionId : event.target.id
                    },
                    refetchQueries: [
                        {
                            query: FETCH_USED_ITEM_COMMENTS,
                            variables: { useditemId: String(router.query.itemid)},
                        },
                    ],
                })
                Modalsuccess({content:"댓글 수정에 성공했습니다"})
                setisEdit(false)
            }catch(error){
                if (error instanceof Error) ModalError({content: "수정에 실패했습니다!"});
            }


    } 
    const onClickCanCel = ()=>{
      setisEdit(false)
    }


    return(<>
  
    {isEdit === false && (
        <>
          <S.FetchComments>
            <S.CommentsBox>
                <S.CommentsIcon></S.CommentsIcon>
                <S.CommentsDetail>
                    <S.CommentsName>
                        <S.RealWriter>
                            {props.el.user.name} 
                            </S.RealWriter>
                    </S.CommentsName>
                    <S.CommentsDate>
                        {props.el.createdAt?.slice(2, 10)}
                    </S.CommentsDate>
                    <S.CommentsText>
                        {props.el.contents}
                    </S.CommentsText>
                </S.CommentsDetail>
            <S.CommentsBack>
              <S.CommentsEdit onClick={onClickEdit}
                ></S.CommentsEdit>
              <S.CommentsDelete
                id={props.el._id}
                onClick={props.onClickDelete}
                ></S.CommentsDelete>
            </S.CommentsBack>
          </S.CommentsBox> 
          <CommentAnswerPage
            _id={props.el._id}
          />

          {data?.fetchUseditemQuestionAnswers.map((el)=>(
            
            <CommentAnswerFetchPage
            key={el._id}
            el={el}   
            el2={props.el}        
             />
          ))}

          </S.FetchComments>
        </>
    )} 


    {isEdit === true  &&(

        <>
     <S.Wrapper>
          <S.WrapperComments>
            <S.TitleComments>
              <S.Avatar></S.Avatar>
              <S.CommentsDetail>

                        <S.RealWriter>
                            {props.el.user.name} 
                            </S.RealWriter>

                    <S.CommentsDate>
                        {props.el.createdAt?.slice(2, 10)}
                    </S.CommentsDate>
                    <S.CommentsText>
                        {props.el.contents}
                    </S.CommentsText>
                </S.CommentsDetail>
            </S.TitleComments>
            <S.CreateComments>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  onChange={onChangeEditContents}
                  defaultValue={props.el.contents}
                  //
                  // value={props.data?.fetchUseditemQuestions.contents}
                  />
                <S.CommentsUnder>
                    <S.Button 
                      id={props.el._id}
                      onClick={onClickCanCel}>
                        취소하기
                      </S.Button>
                      <S.ButtonBox 
                      id={props.el._id}
                      onClick={onClickSubmit}>
                        수정하기
                      </S.ButtonBox>
                    </S.CommentsUnder>
              </S.CommentsMiddle>
            </S.CreateComments>
          </S.WrapperComments>
        </S.Wrapper>
    </>
        ) }
        

       
            
    </>)
}
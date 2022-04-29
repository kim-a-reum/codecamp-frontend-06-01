import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ModalError, Modalsuccess } from '../../utility'
import { FETCH_USED_ITEM_COMMENTS, UPDATE_USED_ITEM_QUESTION } from './fetchComment.query'
import * as S from './fetchComment.styled'

export default function FetchCommentsPageUI(props : any){
    const router = useRouter()
    const [isEdit,setisEdit] = useState(false)
    const [editContents,setEditContents] = useState("")
    const [editcomment] = useMutation(UPDATE_USED_ITEM_QUESTION)

    const onClickEdit = (event : any)=>{
      console.log(event.target.id)
        setisEdit(true)
    }
    const onChangeEditContents = (event: any)=>{
        setEditContents(event.target.value)
    }
    const onClickSubmit = async (event : any)=>{
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


    return(<>
  
    {isEdit === false && (
        <>
          <S.FetchComments>
            <S.CommentsBox>
                <S.CommentsIcon></S.CommentsIcon>
                <S.CommentsDetail>
                    <S.CommentsName>
                        <S.RealWriter>작성자 :  
                            {props.el.user.name} 
                            </S.RealWriter>
                    </S.CommentsName>
                    <S.CommentsText> 댓글 내용 : 
                        {props.el.contents}
                        </S.CommentsText>
                    <S.CommentsDate>
                        {props.el.createdAt?.slice(0, 10)}
                    </S.CommentsDate>
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
          </S.FetchComments>
        </>
    )} 


    {isEdit === true  &&(

        <>
     <S.Wrapper>
          <S.WrapperComments>
            <S.TitleComments>
              <S.Avatar></S.Avatar>
              상품 질문 수정하기
            </S.TitleComments>
            <S.CreateComments>
              <S.CommentsTop>
                <S.CommentsProfile
                  type="text"
                  disabled
                   defaultValue={props.el.user.name} 
                  />
              </S.CommentsTop>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  onChange={onChangeEditContents}
                  defaultValue={props.el.contents}
                  //
                  // value={props.data?.fetchUseditemQuestions.contents}
                  />
                <S.CommentsUnder>
                  <S.TypingBox>
                    {(editContents?.length)}
                    /500
                  </S.TypingBox>
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
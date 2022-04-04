import "antd/dist/antd.css";
import * as S from "./BoardComments.styled";
import { IBoardCommentMap } from "./BoardComments.types";
import Modal from "antd/lib/modal/Modal";
import { MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./BoardComments.queries";
import { ModalError, Modalsuccess } from "../../utility";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";




export default function FetchBoardCommentPage (props : IBoardCommentMap){
  const router = useRouter()
    const[isEdit,setIsEdit] = useState(false);
    const [updateBoardComment] =useMutation(UPDATE_BOARD_COMMENT)
    const [editcontents, setEditContents] = useState("");
    const [editpassword, setEditPassWord] = useState("");
    const onClickEdit = (event : MouseEvent<HTMLButtonElement>)=>{
        if (event.target instanceof Element) 
        setIsEdit(true);
      }
  const onChangeEditContents = (event: ChangeEvent<HTMLInputElement>) => {
        setEditContents(event.target.value);
      };     
  const onChangeEditPassWord = (event: ChangeEvent<HTMLInputElement>) => {
        setEditPassWord(event.target.value);
      };
    const OnClickUpdate = async(event : MouseEvent<HTMLButtonElement>) => {
        try {          
        await updateBoardComment({
            variables: {
                  updateBoardCommentInput :{
                      contents: editcontents,
                      rating : props.rating
                  },
                  password : editpassword,
                  boardCommentId : String(props.el?._id)
            },
            refetchQueries: [
              {
                query: FETCH_BOARD_COMMENTS,
                variables: { boardId:String(router.query.boardId) },
              },
            ],
          });
      
      
      
          
          Modalsuccess({content :"댓글 수정에 성공했습니다!"});
          setIsEdit(false)
        } catch (error) {
          if (error instanceof Error) ModalError({content: "비밀번호를 확인해주세요!"});
        }
      
      
      }
    



return (
    <>
    {props.isOpenModal && (
        <Modal
        visible={true}
        onOk={props.onClickDelete}
        onCancel={props?.onClickOpenModal}
        >
          <div> 비밀번호를 입력해주세요</div>
          <S.PasswordInput type="password" onChange={props.onChangeDeletePassWord} />
        </Modal>
      )}
    
        
        
         {isEdit === false && (
            <S.FetchComments>
            <S.CommentsBox>
            <S.CommentsIcon></S.CommentsIcon>
            <S.CommentsDetail>
              <S.CommentsName>
                <S.RealWriter>작성자 : {props.el.writer}</S.RealWriter>
                <S.RealRating>
                  별 {props.el.rating} 개 <br /> 주셨어요 {" "}
                </S.RealRating>
                <S.Star value={props.el?.rating} disabled></S.Star>
              </S.CommentsName>
              <S.CommentsText>내용 : {props.el.contents}</S.CommentsText>
              <S.CommentsDate>
                {" "}
                {props.el.createdAt?.slice(0, 10)}
              </S.CommentsDate>
            </S.CommentsDetail>
            <S.CommentsBack>
              <S.CommentsEdit id={props.el._id} onClick={onClickEdit}></S.CommentsEdit>
              <S.CommentsDelete
                id={props.el._id}
                onClick={props.onClickOpenModal}
                ></S.CommentsDelete>
            </S.CommentsBack>
          </S.CommentsBox> 
          </S.FetchComments>
        )}
         {isEdit === true && (
         
         <S.EditPage>
           <S.WrapperComments>
            <S.CreateComments>
              <S.CommentsTop>
                <S.CommentsProfile
                  type="text"
                  defaultValue={String(props?.data2?.fetchBoardComments[Number(props.index)].writer)}
                  readOnly={true}
                />
                <S.CommentsProfile
                  type="password"
                  placeholder="비밀번호"
                  onChange={onChangeEditPassWord}
                />
                <S.Star></S.Star>
              </S.CommentsTop>
              <S.CommentsMiddle>
                <S.CommentsContents
                  type="text"
                  placeholder=" 수정할 내용을 입력해주세요"
                  onChange={onChangeEditContents}/>
                <S.CommentsUnder>
                  <S.TypingBox>
                  {(props?.contents?.length)}
                    0/1000
                  </S.TypingBox>
                  <S.ButtonBox id={String(props.el._id)} onClick={OnClickUpdate} >
                    수정하기
                  </S.ButtonBox>
                </S.CommentsUnder>
              </S.CommentsMiddle>
            </S.CreateComments>
          </S.WrapperComments>
           
           
           
            </S.EditPage>
         
         
         
         
         
         )}
         
         
        
        </>





)
}
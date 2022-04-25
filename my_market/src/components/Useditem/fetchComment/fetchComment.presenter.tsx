import * as S from './fetchComment.styled'

export default function FetchCommentsPageUI(props : any){

console.log(props)
    return(<>
         <S.FetchComments>
            <S.CommentsBox>
                <S.CommentsIcon></S.CommentsIcon>
                <S.CommentsDetail>
                    <S.CommentsName>
                        <S.RealWriter>작성자 :
                            {props.el.user.name} 
                            </S.RealWriter>
                    </S.CommentsName>
                    <S.CommentsText>내용 : 
                        {props.el.contents}
                        </S.CommentsText>
                    <S.CommentsDate>
                        {props.el.createdAt?.slice(0, 10)}
                    </S.CommentsDate>
                </S.CommentsDetail>
            <S.CommentsBack>
              <S.CommentsEdit
            //    id={props.el._id}
                ></S.CommentsEdit>
              <S.CommentsDelete
                // id={props.el._id}
                // onClick={props.onClickOpenModal}
                ></S.CommentsDelete>
            </S.CommentsBack>
          </S.CommentsBox> 
          </S.FetchComments>
    </>)
}
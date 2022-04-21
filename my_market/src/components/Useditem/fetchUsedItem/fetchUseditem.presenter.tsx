import { Tooltip } from 'antd'
import { getDate } from '../../utility'
import 'antd/dist/antd.css'
import * as S from './fetchUseditem.styled'

export default function FetchUsedItemPageUI (props){

console.log(props.data)
return(
    <>
     <S.Body>
          <S.Wrapper>
            <S.Top>
              <S.TopAddress>
                {" "}
              </S.TopAddress>
              <S.TopProfile>
                <S.TopLeft>
                  <S.LeftIcon></S.LeftIcon>
                  <S.LeftName>
                    <S.RealName>
                      {props.data ? (
                        props.data?.fetchUseditem.buyer
                      ) : (
                        <div> 작성자 loading...중</div>
                      )}{" "}
                    </S.RealName>
                    <S.RealDate>
                      {" "}
                      Date : {getDate(props.data?.fetchUseditem.createdAt)}
                      
                    </S.RealDate>
                  </S.LeftName>
                </S.TopLeft>
                <S.TopRight>
                  <S.RightClip></S.RightClip>
                  <Tooltip title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}>
                  <S.RightLocation>
                  </S.RightLocation>
                  <S.Location>나는 지금 !</S.Location>
                  </Tooltip>
                </S.TopRight>
              </S.TopProfile>
            </S.Top>
            <S.Middle>
              <S.MiddleTitle>
                제목 : {props.data?.fetchUseditem.name}
              </S.MiddleTitle>
              <S.MiddleContents>
                내용 : {props.data?.fetchUseditem.contents} <br /> 
                [이미지] <S.ImageWrapper>
                  {props.data?.fetchUseditem.images?.filter((el:string)=>el)
                  // filter해준것은 빈 문자열이 아닌애들만 이미지 보여주라고 한 것 
                  .map((el:string)=>(
                      <S.Image key={el}
                      src={`https://storage.googleapis.com/${el}`}/>
                  ))}
                </S.ImageWrapper>
              </S.MiddleContents>
            </S.Middle>

            <S.WrapperFoot>
              <S.BackButton >목록으로</S.BackButton>
              <S.EditButton>수정하기</S.EditButton>
              <S.DeleteButton>삭제하기</S.DeleteButton>
            </S.WrapperFoot>
          </S.Wrapper>
        </S.Body>
    </>
)



}
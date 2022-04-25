import { Tooltip } from 'antd'
import { getDate } from '../../utility'
import 'antd/dist/antd.css'
import * as S from './fetchUseditem.styled'
import Dompurify from "dompurify"

export default function FetchUsedItemPageUI (props : any){


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
                      판매자 : {props.data?.fetchUseditem?.seller?.name}
                    </S.RealName>
                    <S.RealDate>
                      {" "}
                      등록일 : {getDate(props.data?.fetchUseditem.createdAt)}
                      
                    </S.RealDate>
                  </S.LeftName>
                </S.TopLeft>
                <S.TopRight>
                  <S.RightClip></S.RightClip>
                  <Tooltip title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}>                
                  <S.Location> 거래 희망 주소는 여기!
                  </S.Location>
                  </Tooltip>
                </S.TopRight>
              </S.TopProfile>
            </S.Top>
            <S.Middle>
              <S.MiddleTitle>
                상품명 : {props.data?.fetchUseditem.name}
              </S.MiddleTitle>
              <S.MiddleContents>
                {process.browser ? (
                  <div dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
                  }}/>
                ) : (<div/>)}
                    상품 이미지 : 
                  <S.ImageWrapper>
                  {props.data?.fetchUseditem.images?.filter((el:string)=>el)
                  // filter해준것은 빈 문자열이 아닌애들만 이미지 보여주라고 한 것 
                  .map((el:string)=>(
                      <S.Image key={el}
                      src={`https://storage.googleapis.com/${el}`}/>
                  ))}
                </S.ImageWrapper>
                가격 : {props.data?.fetchUseditem.price}<br/>
                태그 : {props.data?.fetchUseditem.tags}
              </S.MiddleContents>
            </S.Middle>

            <S.WrapperFoot>
              <S.BackButton>목록으로</S.BackButton>
              <S.BasketButton onClick= {()=>props.onClickBasket(props.data?.fetchUseditem)}>장바구니 담기</S.BasketButton>
              <S.EditButton onClick = {props.onClickEdit}>수정하기</S.EditButton>
            </S.WrapperFoot>
          </S.Wrapper>
        </S.Body>
    </>
)



}
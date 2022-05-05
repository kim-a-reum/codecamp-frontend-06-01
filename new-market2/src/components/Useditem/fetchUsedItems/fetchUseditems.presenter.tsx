
import Dompurify from "dompurify"
import * as S from './fetchUseditems.styled'

export default function FetchUsedItemsPageUI(props: any){

    return(
        <S.Wrapper onClick={props.onClickDetail}>


        <S.Box key={props.el._id}>
          {props.el.images[0]
          ? 
          <S.RealImage
           src={`http://storage.googleapis.com/${String(
             props.el.images[0]
             )}`}/>
          
          
          :
                      
          <S.DefaultImage></S.DefaultImage>
            
                    }
        <S.Column > 상품명 : {props.el.name}</S.Column>
        {/* <S.Column id={props.el._id}> */}
            
            {/* 내용 : {process.browser ? (
                  <S.Column  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(props.el.contents),
                  }}/>
                ) : (<S.Column />)} */}
                
        {/* </S.Column> */}
        <S.Column>
          <div>가격 : {props.el.price}원 </div>
          <S.SDate><br/>{
          (props.el.createdAt).slice(2,10)} </S.SDate>
          </S.Column>
        <S.Column>판매자이름 : {props.el.seller.name}</S.Column>
        
        </S.Box>

        
            </S.Wrapper>
    )
}
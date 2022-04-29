
import DOMPurify from 'dompurify'
import * as S from './fetchUseditems.styled'

export default function FetchUsedItemsPageUI(props: any){

    return(
        <S.Wrapper onClick={props.onClickDetail}>


        <S.Box key={props.el._id}>
        <S.Column  >작성자 : {props.el.name}</S.Column>
        <S.Column id={props.el._id}>
            
            {/* 내용 : {el.contents} */}

            내용 : {process.browser ? (
                  <div dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(props.el.contents),
                  }}/>
                ) : (<div/>)}
        
        
        
        </S.Column>
        <S.Column>가격 : {props.el.price}</S.Column>
        <S.Column>판매자이름 : {props.el.seller.name}</S.Column>
        
        </S.Box>

        
            </S.Wrapper>
    )
}
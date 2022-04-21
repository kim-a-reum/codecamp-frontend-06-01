
import * as S from './fetchUseditems.styled'

export default function FetchUsedItemsPageUI(props){

console.log(props.data?.fetchUseditems)
    return(
        <S.Wrapper>

        {props.data?.fetchUseditems.map((el,index)=>(
            <>
        <S.Box key={el._id}>
        <S.Column  >작성자 : {el.name}</S.Column>
        <S.Column id={el._id} onClick={props.onClickDetail}>내용 : {el.contents}</S.Column>
        <S.Column>가격 : {el.price}</S.Column>
        <S.Column>판매자이름 : {el.seller.name}</S.Column>
        
        </S.Box>
            </>
            ))}
        
            </S.Wrapper>
    )
}
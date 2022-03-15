import styled from '@emotion/styled'



export default function AAAPage() {

    // 여기는 자바스크립트 쓰는곳 
    const Body = styled.div`

        box-sizing: border-box;
        padding-top: 100px;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    `
    const Wrapper = styled.div`
        width: 640px;
        height: 1138px;
        border: 1px solid gray;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
`
    const WrapperTop = styled.div`
        width: 640px;
        height: 380px;        
        padding: 80px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    const Top = styled.div`


    `
    const TopImg = styled.div`
        width: 32px;
        height: 32px;
        background-image: url(/돋보기.svg);
    
    `

    const TopMy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    `
    const MyText = styled.div`
        width: 71px;
        height: 43px;
        font-size: 40px;
        font-weight: bold;   
        `
    const MyFace= styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 180px;
                `
    const FaceImage = styled.div`
        background-image: url(/임정아얼굴.png);     
        background-size   : 100% auto ;
        width: 60px;
        height: 60px;
    
                `
    const FaceName = styled.div`
        font-size: 25px;
        font-weight: bold;
`
    const FacePage = styled.div`
    background-image: url(/임정아화살표.svg);
    width: 28px;
    height: 28px;
    
    `

    const Navigation = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 40px 80px 0px 10px;
    
    
    `
    const Navigation1 = styled.div`
        font-size: 30px;
        font-weight: bold;
        color: #cacaca;
    `
    const Navigation2= styled.div`
        font-size: 30px;
        color: #ff1b6d;
        font-weight: bold;
        

    `
    const Navigation3= styled.div`
    font-size: 30px;
    color: #ff1b6d;

`
    const NavigationLine = styled.div`
    border-top: 1px solid #ff1b6d ;
    margin-top: 5px;
    
    `
    const WrapperMiddle = styled.div`
        width: 640px;
        height: 1138px;       
        display: flex;
        flex-direction: column;
        
        
    `
    const Dividedline = styled.div`
    border-top: 3px solid #cacaca;
    width: 640px;
    
    `
const MiddleBox = styled.div`
    width: 590px;
    height: 113px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 40px ;
`
const BoxContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    


`
const ContentsNumber = styled.div`
    
    font-size: 20px;
    color: #adadad;
    padding-bottom: 5px;
    
`
const ContentsValue = styled.div`
    
    font-size : 26px;
`
const BoxOpen = styled.div`
    background-image: url(/내림화살표.svg);
    width: 60px;
    height: 60px;
    /* padding-left: 30px; 왜 안먹는것처럼 보이는지는 알았는데 
    부모 박스에 꽉차게 주고 패딩을 주려면 치수를 다 계산해야 하는 방법밖에 없는걸가...*/
    /* margin-left: 10px; */
    
    `

const WrapperUnder = styled.div`
    width: 640px;
    height: 200px;
    
    display: flex;
    flex-direction: row;

    `

const UnderBox = styled.div`
    width: 160px;
    height: 117px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const BoxImage1 = styled.div`
    width: 58px;
    height: 58px;
    background-image: url(/홈.svg);
`
const BoxImage2 = styled.div`
    width: 58px;
    height: 58px;
    background-image: url(/잇츠로드.svg);`
const BoxImage3 = styled.div`
    width: 58px;
    height: 58px;
    background-image: url(/마이찜.svg);`
const BoxImage4 = styled.div`
    width: 58px;
    height: 58px;
    background-image: url(/마이.svg);`
const BoxName = styled.div`
    font-size: 20px;
    color: #adadad;

`
const BoxName1 = styled.div`
    font-size: 20px;
    color: #ff1b6d;

`
return (

    // HTML 쓰는곳 
    <Body>
    <Wrapper>
    <WrapperTop>
        <Top>
            <TopImg></TopImg>
            <TopMy>
                <MyText>마이</MyText>
                <MyFace>
                    <FaceImage></FaceImage>
                    <FaceName>임정아</FaceName>
                    <FacePage></FacePage>
                </MyFace>
            </TopMy>
            
        </Top>
        <Navigation>
            <Navigation1>공지사항</Navigation1>
            <Navigation1>이벤트</Navigation1>
            <Navigation2>
                <Navigation3>FAQ</Navigation3>
                <NavigationLine></NavigationLine>
            </Navigation2>
            <Navigation1>Q&A</Navigation1>

        </Navigation>
    </WrapperTop>
    <Dividedline></Dividedline>
    <WrapperMiddle>        
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 01 </ContentsNumber>
                <ContentsValue>리뷰 작성은 어떻게 하나요?</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 02 </ContentsNumber>
                <ContentsValue>리뷰 수정/삭제는 어떻게 하나요?</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 03 </ContentsNumber>
                <ContentsValue>아이디/비밀번호를 잊어버렸어요.</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 04 </ContentsNumber>
                <ContentsValue>회원탈퇴를 하고싶어요.</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 05 </ContentsNumber>
                <ContentsValue>출발지 설정은 어떻게 하나요?</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
        <MiddleBox>
            <BoxContents>
                <ContentsNumber>Q. 06 </ContentsNumber>
                <ContentsValue>비밀번호를 변경하고 싶어요.</ContentsValue>
            </BoxContents>
            <BoxOpen></BoxOpen>
        </MiddleBox>
    </WrapperMiddle>
    <Dividedline></Dividedline>
    <WrapperUnder>
        <UnderBox>
            <BoxImage1></BoxImage1>
            <BoxName>홈</BoxName>
        </UnderBox>
        <UnderBox>
            <BoxImage2></BoxImage2>
            <BoxName>잇츠로드</BoxName>
        </UnderBox>
        <UnderBox>
            <BoxImage3></BoxImage3>
            <BoxName>마이찜</BoxName>
        </UnderBox>
        <UnderBox>
            <BoxImage4></BoxImage4>
            <BoxName1>마이찜</BoxName1>
        </UnderBox>
    </WrapperUnder>
    </Wrapper>    



    
    </Body>
    )
}

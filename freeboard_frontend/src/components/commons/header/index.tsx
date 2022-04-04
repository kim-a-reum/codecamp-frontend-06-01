import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #f59e9e;
  background-position: auto;
  height: 110px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
`;
const CenterTitle = styled.div`
font-size: 60px;
font-weight: 900;
background-color: aliceblue;
  
`
const CenterSubTitle = styled.div`
  font-size: 30px;
  margin-top: 3px;
  
  height: 40px;
  background-color: #f59e9e;
  
`
export default function LayoutHeader() {
  return <Wrapper> 
        <CenterTitle> 🎀 🐻 루피의 고민마켓 🐻 🎀  </CenterTitle>
        {/* <CenterSubTitle>ヱ민을 ㄴr눌수록 ħappyㅎŁ 간ズl. 뽀ㄷН. 인생○l⊂ト !💜 💟 💘 </CenterSubTitle> */}
        {/* <CenterSubTitle>
          -ㅂ┣보 oㅑ 오H┖ ┩혼ㅈ┞힘 드 ㄹ┦ㅎH- ヱ민을 ㄴr눠 💜 💟
          </CenterSubTitle> */}
          <CenterSubTitle>
          ヱ민을 공유㈛ヱ 걱정을 ㄴr누는 ㅁト켓입LI⊂ト 💜
          </CenterSubTitle>
  </Wrapper>;
}

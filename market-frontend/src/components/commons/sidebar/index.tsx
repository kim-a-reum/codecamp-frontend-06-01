import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: lightgray;
  width: 160px;
  height: 800px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Roopi = styled.div`
  width: 130px;
  height: 130px;
  background-image: url('../../../../picture/루피드루와.png');
  background-size: contain;
  background-repeat: no-repeat;
`
const Detail = styled.div`
  width:155px;
  font-size: 20px;
`
export default function LayoutSidebar() {
  return (
  <>
  <Wrapper> 
    <Roopi>  </Roopi>
    <Detail> 원하는 곳에 들어가서<br/>다양한 이야기를 들어봐💜😎💙😎🧡😎💛 
    </Detail>
  </Wrapper>
  </>
  )
}

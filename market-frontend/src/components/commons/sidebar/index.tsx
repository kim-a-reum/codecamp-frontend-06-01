import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #9bf17f;
  width: 300px;
  height: 600px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
border-radius: 0px 100px 100px 0px;
`;

const Detail = styled.div`
  width:155px;
  font-size: 20px;
`
export default function LayoutSidebar() {
  return (
  <>
  <Wrapper> 

    <Detail> 
    </Detail>
  </Wrapper>
  </>
  )
}

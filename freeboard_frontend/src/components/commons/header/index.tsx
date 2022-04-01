import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #d88282;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LeftIcon = styled.div`
font-size: 60px;
  
`
export default function LayoutHeader() {
  return <Wrapper> 
        <LeftIcon> 🥰 😍 😘</LeftIcon>
  </Wrapper>;
}

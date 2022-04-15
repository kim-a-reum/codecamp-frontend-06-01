import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: lightgray;
  width: 300px;
  height: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export default function LayoutSidebar() {
  const router = useRouter()

  const onClickMain = ()=>{
    router.push('/main')
  
  }
  const onClickCreate = ()=>{
    router.push('/main/new')
  
  }

  return (
  <>
  <Wrapper> 
    <div>
    talker
    
    </div>
    <div>
    <button onClick={onClickMain}>전체 글 보기</button>
    <button onClick={onClickCreate}>새글 작성</button>
    </div>
  </Wrapper>
  </>
  )
}

import styled from "@emotion/styled"
import Router, { useRouter } from "next/router"

const Body = styled.div`
  width: 100%;
  height: 300%;
  background-color: beige;

`
const Myvideo = styled.video`
  width: 500px;
  height: 500px;

`
const GoBoard = styled.button`
  width: 100px;
  height: 100px;

`

export default function Home() {
  const router = useRouter()

  const onClickGoBoard = ()=> {
        router.push('/boards');
  }
  return (
    <Body>
      <Myvideo src="../video/루피공주.mp4" controls autoPlay loop muted ></Myvideo>
    <GoBoard onClick={onClickGoBoard}>메인페이지로이동</GoBoard>
   </Body>
  )
}

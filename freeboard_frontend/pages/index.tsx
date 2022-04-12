import styled from "@emotion/styled"
import Router, { useRouter } from "next/router"

const Body = styled.div`
    margin-top: -40px;
    
    width: 1500px;
    box-sizing: border-box;
    background-color: #f4d8dc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Top = styled.div`
  width: 620px;
  height: 70px;  
  font-size: 50px;
  text-align: center;
`
const Middle = styled.div`
  width: 1500px;
  height: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;


`
const Line = styled.div`
  width : 500px;
  height: 50px;
  background-color: indianred;
`
const Myvideo = styled.video`
  width: 500px;
  height: 270px;
  border-radius: 400px;
`
const Bottom = styled.div`
  width: 1500px;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
  

`
const ContentBox = styled.div`
  width: 200px;
  height: 250px;
  background-color: lavender;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const Roopi1 = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('../picture/루피물음표.png');
  background-size: cover;
  
`
const Roopi2 = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('../picture/루피기도.png');
  background-size: cover;
  
`
const Roopi3 = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('../picture/루피하이.png');
  background-size: cover;
  
`
const Roopi4 = styled.div`
  width: 150px;
  height: 160px;
  background-image: url('../picture/루피인사.png');
  background-size: cover;
  
`
const Heart = styled.span`
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 12px;
`
const ContentDetail = styled.div`
  width: 200px;
  height: 30px;  
  text-align: center;
  font-size: 17px;
`
const ContentDetail2 = styled.div`
   width: 200px;
  height: 50px;  
  text-align: center;
  font-weight: 900;
`
const GoBoard = styled.button`
  width: 190px;
  height: 60px;
  border: none;
  background-image: url('../picture/toy-train.png');
  background-size: auto;
  background-repeat: repeat-x;
  background-color: #f4d8dc;
  text-align: inherit;
  cursor: pointer;
`

export default function Home() {
  const router = useRouter()

  const onClickGoBoard = ()=> {
        router.push('/boards');
  }
  return (
    <Body>
      <Top>💖 루피나라에 오신것을 환영합니다 💖</Top>
      <Middle>
        <Line></Line>
        <Myvideo src="../video/루피공주.mp4" autoPlay loop muted ></Myvideo>
        <Line></Line>
      </Middle>
      <span onClick={onClickGoBoard} >Click ! 루피나라로 출발🚀🚀</span>
      <GoBoard onClick={onClickGoBoard}></GoBoard>
      <Bottom>
        <ContentBox>
          <Roopi1></Roopi1>
          <Heart>💜💜💜💜💜💜💜💜</Heart>
          <ContentDetail>오늘 뭐먹을지 고민일땐?</ContentDetail>
          <ContentDetail2>[오늘의 추천 메뉴]</ContentDetail2>
        </ContentBox>
        <ContentBox>
          <Roopi2></Roopi2>
          <Heart>🧡🧡🧡🧡🧡🧡🧡🧡</Heart>
          <ContentDetail>서로의 고민을 들어보자 !</ContentDetail>
          <ContentDetail2>[고민고민 게시판]</ContentDetail2>
        </ContentBox>
        <ContentBox>
          <Roopi3></Roopi3>
          <Heart>💚💚💚💚💚💚💚💚</Heart>
          <ContentDetail>아무말 대잔치 !</ContentDetail>
          <ContentDetail2>[자유게시판]</ContentDetail2>
        </ContentBox>
        <ContentBox>
          <Roopi4></Roopi4>
          <Heart>🤎🤎🤎🤎🤎🤎🤎🤎</Heart>
          <ContentDetail>물건을 사구팔구 !</ContentDetail>
          <ContentDetail2>[중고마켓]</ContentDetail2>
        </ContentBox>

      </Bottom>

   </Body>
  )
}

// 여기는 백엔드 없이 나의 데이터베이스에서 바로 데이터를 꺼내오는곳이지
import styled from '@emotion/styled'
import {collection, getFirestore,addDoc,getDocs, DocumentData} from 'firebase/firestore/lite'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { firebaseApp } from '../_app'
// ^이 친구는 컬렉션이라는 내가 데이터를 집어넣고 빼고 할건데 컬렉션은 파이어스토어에 있고, 컬렉션 안의 문서들은 다큐먼트로 되어있고, 그 문서들을 get 가져와서 쓸거에요 ! import 다 해준거야

const Top= styled.div`
    font-size: 40px;
    
`
const Wrapper = styled.div`
    width: 1000px;
    
    background-color: aliceblue;
`
const TopRow = styled.div`
    
    height: 50px;
    display: flex;
    flex-direction: row;
    text-align: center;
    border-bottom: 1px solid gray;
`
const TopColumn= styled.div`
    width: 25%;
    font-weight: bolder;
    
`

const Row = styled.div`
    
    height: 80px;
    display: flex;
    flex-direction: row;
`
const Column= styled.div`
    width: 25%;
    text-align: center;
    
`
export default function MyFirebasePage(){
    const router = useRouter();
    const [dataBoards,setdataBoards] = useState<DocumentData[]>([])

    useEffect(()=>{
        async function fetchBoards(){

            const board = collection(getFirestore(firebaseApp), "board")
            // board라는 컬렉션에서 꺼내온다는 뜻
            const result = await getDocs(board)
            const boards = result.docs.map((el)=>el.data())
            setdataBoards(boards)
        }
        fetchBoards()
    },[])

    return (
    <>
        <Top> 여기는 나의 파이어게시판이지 </Top>
        <Wrapper>

            <TopRow>
                <TopColumn>번호</TopColumn>
                <TopColumn>제목</TopColumn>
                <TopColumn>내용</TopColumn>
                <TopColumn>작성자</TopColumn>
            </TopRow>
            {dataBoards.map((el:any, index: number)=> (
                <Row key ={index}>
                    <Column>{index + 1}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.contents}</Column>
                    <Column>{el.writer}</Column>
                </Row>
                ))}
        </Wrapper>
    </>
    )
}
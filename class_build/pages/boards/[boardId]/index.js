import {useRouter} from 'next/router'
import Head from 'next/head'
import { gql, request } from 'graphql-request'



export default function BoardsDetailPage(props){
    const router = useRouter()

    return(
        <>
        <Head>
            <meta property="og:title" content={props.myboardData?.title}/>
            <meta property="og:description" content={props.myboardData?.contents}/>
            <meta property="og:image" content={props.myboardData?.images[0]}/>
        </Head>
        <div>
            안녕하세요! 게시글 상세페이지 입니다!!<br/>
            게시글 ID는 {router.query.boardId}입니다!! 

        </div>
        </>
    )
}
const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId:$boardId){
        _id
        title
        contents
        images
    }
}
`

//이 페이지는 서버사이드 렌더링 페이지입니다!
export const getServerSideProps = async (context)=>{
    // 데이터를 요청할 것 ! 
    // const {data} = useQuery(FETCH_BOARD) 이거 안되니까 ! 
    const result = await request("https://backend06.codebootcamp.co.kr/graphql",FETCH_BOARD,{boardId: context.query.boardId})
    // const {data} = useQuery(FETCH_BOARD)

    return{
        props: {
            myboardData:{
                title: result.fetchBoard.title,
                contents:result.fetchBoard.contents,
                images:result.fetchBoard.images,
            }
        }
    }

}
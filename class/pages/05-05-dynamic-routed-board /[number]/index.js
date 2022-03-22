import {useQuery,gql} from '@apollo/client' 
import { route } from 'next/dist/server/router'
import { Router, useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }

`

export default function StaticRoutedPage(){
    const router = useRouter()
    console.log(router)
    
        const { data } = useQuery(FETCH_BOARD,
                {variables : {number:Number(router.query.number)}
            })
        console.log(data)

    return(
    <> 
        <div>{data?.fetchBoard?.number}번 게시글에 오신걸 환영합니다! </div>
        <div>작성자 : {data?.fetchBoard?.writer}</div>
        <div>제목 : {data?.fetchBoard?.title} </div>
        <div>내용 : {data?.fetchBoard?.contents} </div>
    </>
    )
    
    
    }
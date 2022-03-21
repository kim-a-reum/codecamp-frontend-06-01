import {useQuery,gql} from '@apollo/client' 

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
//onclick이 아니라 라우팅 된 페이지니까 열리자마자 여기를 읽어서 useQuery를 실행시켜버림
    
        const { data } = useQuery(FETCH_BOARD,
                {variables : {number : 83011}
            })
        console.log(data)

    return(
    <> 
    {/* //조건부 렌더링이라고 한다 '데이터가 있을때 뒤에꺼 보여줘 data &&
        옵셔널 체이닝 기법은 ?만 붙이면 된다' */}
        <div>{data?.fetchBoard.number}번 게시글에 오신걸 환영합니다! </div>
        <div>작성자 : {data?.fetchBoard.writer}</div>
        <div>제목 : {data?.fetchBoard.title} </div>
        <div>내용 : {data?.fetchBoard.contents} </div>
    </>
    )
    
    
    }
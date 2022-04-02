import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroller'
const FETCH_BOARDS = gql`

    query fetchBoards($page:Int){
            fetchBoards(page:$page){
                _id
                writer
                title
                contents

            }
    }

`
const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`

const MyColumn = styled.div`
    width: 25%;

`

export default function MapBoardPage(){

    
        const { data, fetchMore} = useQuery(FETCH_BOARDS)
        const onLoadMore = () => {
            if(!data) return;
            // 데이터가 있어야 실행을 해줘 그냥 들어갔을때 실행하지말고..! 
            fetchMore({
                variables : {page: Math.ceil(data?.fetchBoards.length / 10)},
                // 현재받은 페이지 수 + 1
                // fetchboards로 받은 usequery 10개를 다시 수정하겠다 :
                // fetchmoresult는 fetchmore로 variables이용해서 받은 다음페이지를의미 
                updateQuery: (prev,{fetchMoreResult}) => {
                    if(!fetchMoreResult.fetchBoards) 
                    return {fetchBoards:[...prev.fetchBoards]}
                    // 
                    return {
                        fetchBoards: [...prev.fetchBoards,...fetchMoreResult.fetchBoards]
                        // 내가 기존에 가지고 있던 (usequery써서 받은) fetchboards랑 더받은거의 fetchboards를 붙여서 보여줘 
                    };
                },
            });
        };
    return(
        <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}>
        {data?.fetchBoards.map((el : any )=>(
            <MyRow key={el._id}>
                
                <MyColumn>{el._id}</MyColumn>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))} 
    </InfiniteScroll>
        
    );
     
    
    }
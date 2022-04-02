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
const ScrollBox = styled.div`
    height: 500px;
    width: 1600px;
    overflow: auto;
    background-color: pink;

`
export default function MapBoardPage(){

    
        const { data, fetchMore} = useQuery(FETCH_BOARDS)
        const onLoadMore = () => {
            if(!data) return;
            
            fetchMore({
                variables : {page: Math.ceil(data?.fetchBoards.length / 10)},
                updateQuery: (prev,{fetchMoreResult}) => {
                    if(!fetchMoreResult.fetchBoards) 
                    return {fetchBoards:[...prev.fetchBoards]}
                    // 
                    return {
                        fetchBoards: [...prev.fetchBoards,...fetchMoreResult.fetchBoards]
                
                    };
                },
            });
        };
    return(
        <ScrollBox>

        <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}>
        {data?.fetchBoards.map((el : any )=>(
            <MyRow key={el._id}>
                
                <MyColumn>{el._id}</MyColumn>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>{el.title} </MyColumn>
            </MyRow>
        ))} 
    </InfiniteScroll>
        </ScrollBox>
        
    );
     
    
    }
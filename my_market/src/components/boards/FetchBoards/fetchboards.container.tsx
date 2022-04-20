
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import FetchBoardsPageUI from "./fetchboards.presenter";
import InfiniteScroll from 'react-infinite-scroller'
import styled from "@emotion/styled";

const Myscroll = styled.div`
height: 500px;
  overflow:auto;


`


const FETCH_BOARDS = gql`
    query fetchBoards($page :Int){
        fetchBoards( page : $page ){
                _id
                writer
                title
                contents
                createdAt
                likeCount
                createdAt
                youtubeUrl



                }
    }

`


export default function FetchBoardsPage(props :any){
    const router = useRouter();
    const { data,refetch,fetchMore } = useQuery(FETCH_BOARDS);
    
    const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof Element) {
          router.push(`main/${event.target.id}`);
        }
      };

      const onLoadMore = () => {
          console.log("시작")
          
        if(!data) return;
        fetchMore({
            variables : {page: Math.ceil(data?.fetchBoards.length /10) +1},
            updateQuery: (prev,{fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchBoards) 
                return {fetchBoards:prev.fetchBoards}
                return {
                    fetchBoards: [...prev.fetchBoards,...fetchMoreResult.fetchBoards]
                };
            },
        });
        console.log(Math.ceil(data?.fetchBoards.length /10) +1)
    };
    return(
<>

<Myscroll>

<InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
    >

{data?.fetchBoards.map((el:any)=>(
    <FetchBoardsPageUI key={el._id}
    onClickDetail={onClickDetail}
    data={data}
    el={el}
/>

))}
</InfiniteScroll>
</Myscroll>


    </>
    )


}
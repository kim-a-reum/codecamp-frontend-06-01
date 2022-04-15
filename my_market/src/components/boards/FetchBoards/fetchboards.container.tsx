
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import FetchBoardsPageUI from "./fetchboards.presenter";
import InfiniteScroll from 'react-infinite-scroller'
import styled from "@emotion/styled";

const Myscroll = styled.div`
  height:700px;
  overflow:auto;
  width: 1200px;

`


const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page :Int){
        fetchBoards(search : $search, page : $page ){
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


export default function FetchBoardsPage(){
    const router = useRouter();
    const { data,refetch } = useQuery(FETCH_BOARDS);
    
    const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof Element) {
          router.push(`boards/${event.target.id}`);
        }
      };

      const onLoadMore = () => {
        if(!data) return;
        fetchMore({
            variables : {page: Math.ceil(data?.fetchBoards.length / 10) + 1},
            updateQuery: (prev,{fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchBoards) 
                return {fetchBoards:[...prev.fetchBoards]}
                return {
                    fetchBoards: [...prev.fetchBoards,...fetchMoreResult.fetchBoards]
                };
            },
        });
    };



console.log(data)
    return(
<>
{data?.fetchBoards.map((el:any, index:Number)=>(
    <FetchBoardsPageUI key={el._id}
onClickDetail={onClickDetail}
data={data}
/>

))}

    </>
    )


}
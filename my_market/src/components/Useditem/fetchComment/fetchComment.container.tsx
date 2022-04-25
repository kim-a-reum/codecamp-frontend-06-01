import {useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../commons/types/generated/types";
import FetchCommentsPageUI from "./fetchComment.presenter";
import { FETCH_USED_ITEM_COMMENTS } from "./fetchComment.query";

const Myscroll = styled.div`
  height:700px;
  overflow:auto;
  width: 1200px;

`

export default function FetchCommentsPage(){
    const router = useRouter()
    const {data, fetchMore} = useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_COMMENTS,{
        variables:{useditemId: String(router.query.itemid) }
    })
    const onLoadMore = () => {
        if(!data) return;
        fetchMore({
            variables : {page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1},
            updateQuery: (prev,{fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchUseditemQuestions) 
                return {fetchUseditemQuestions:[...prev.fetchUseditemQuestions]}
                return {
                    fetchUseditemQuestions: [...prev.fetchUseditemQuestions,...fetchMoreResult.fetchUseditemQuestions]
                };
            },
        });
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

    {data?.fetchUseditemQuestions.map((el:any, index: Number)=>(
        <FetchCommentsPageUI
        key ={el._id}
        el={el}
        index={index}
        data={data}
        />
        
        ))}
        </InfiniteScroll>
        </Myscroll>
        </>
    
    )
}
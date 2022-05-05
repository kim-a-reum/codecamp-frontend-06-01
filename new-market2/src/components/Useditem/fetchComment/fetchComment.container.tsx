import {useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import InfiniteScroll from "react-infinite-scroller";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../commons/types/generated/types";
import { ModalError } from "../../utility";
import FetchCommentsPageUI from "./fetchComment.presenter";
import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_COMMENTS,} from "./fetchComment.query";

const Myscroll = styled.div`
    width: 90%;
  height:700px;
  overflow:auto;
  margin-left: 50px;



`

export default function FetchCommentsPage(){
    const router = useRouter()
    const {data, fetchMore} = useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_COMMENTS,{
        variables:{useditemId: String(router.query.itemid) }
    })
    const [deletecomment] = useMutation(DELETE_USED_ITEM_QUESTION)
    
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
    const onClickDelete = (event : any) => {
        try{
            deletecomment({
                variables: {
                    useditemQuestionId : event.target.id
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_COMMENTS,
                        variables: { useditemId: String(router.query.itemid) },
                    },
                ],
                
            })
        }catch(error){
            ModalError({content: "본인 댓글만 삭제 가능합니다 "})
        }
        
      };
      console.log(data)
    return(
        <>
        <Myscroll>

        <InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
    
    >

    {data?.fetchUseditemQuestions.map((el:any)=>(
        <FetchCommentsPageUI
        key ={el._id}
        el={el}
        data={data}
        onClickDelete={onClickDelete}
        />
        
        ))}
        </InfiniteScroll>
        </Myscroll>
        </>
    
    )
}
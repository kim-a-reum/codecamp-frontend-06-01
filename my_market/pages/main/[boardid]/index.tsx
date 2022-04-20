import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../src/commons/types/generated/types";
import FetchBoardPage from "../../../src/components/boards/FetchBoard/fetchBoard.container";


export default function BoardsFetchPage(){
   



    return(
        <FetchBoardPage
        />
    )


}
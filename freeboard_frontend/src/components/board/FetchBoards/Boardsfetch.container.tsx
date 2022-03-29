import BoardsfetchUI from "./Boardsfetch.presenter";
import { FETCH_BOARDS, DELETE_BOARD } from "./Boardsfetch.queries";
import { MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation } from "../../../commons/types/generated/types";

export default function Boardsfetch() {
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  const onClickDelete = (event: any) => {
    console.log(data.fetchBoards);
    deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`boards/${event.target.id}`);
    }
  };
  return (
    <BoardsfetchUI
      onClickDelete={onClickDelete}
      onClickDetail={onClickDetail}
      data={data}
    />
  );
}

import {useQuery,gql} from '@apollo/client' 
import styled from '@emotion/styled'
import { ChangeEvent, useState} from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'
import _ from "lodash";
import {v4 as uuidv4} from "uuid";

const FETCH_BOARDS = gql`

    query fetchBoards($search: String, $page :Int){
            fetchBoards(search : $search, page : $page ){
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
interface Iprops{

    isMatched:boolean;
}
const Word = styled.span`
    color : ${(props : Iprops)=> (props.isMatched ? "blue" : "black")};

`;

export default function SearchPage(){
        const [keyword, setKeyword] = useState("")

    
        const { data, refetch } = useQuery<Pick<IQuery,"fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARDS)

        const getDebounce = _.debounce((data)=>{
            refetch({ search : data, page : 1})
            setKeyword(data);
        },200)

        const onChangeSearch = (event:ChangeEvent<HTMLInputElement>)=>{
            getDebounce(event.target.value)

        }
        // const onClickSearch = ()=>{
        //     refetch({ search : search , page : 1})
        //     // 숏핸드프로퍼티로 인해 한줄만 써도 됩니당 근데 왜 그렇게 쓰는지는 알아야쥐
        // }

        const onClickPage = (event : any) =>{

            refetch({page:Number(event.target.id)}) 
            

        }
    return(
    <>  
        검색어 입력 : <input type="text" onChange={onChangeSearch}/>
        {/* <button onClick={onClickSearch}>검색하기</button> */}
        {data?.fetchBoards.map((el : any)=>(
            <MyRow key={el._id}>
                <MyColumn>{el.writer}</MyColumn>
                <MyColumn>
                    {el.title
                .replaceAll(keyword,`#$%${keyword}#$%`)
                .split("#$%")
                .map((el : any)=>(
                <Word key ={uuidv4()} isMatched={keyword === el}>
                    {el}
                    </Word>
                    ))} 
                    </MyColumn>
            </MyRow>
        ))}
        {new Array(10).fill(1).map((el,index)=> (
            <span key={index + 1} id = {String(index + 1)} onClick={onClickPage}>{index + 1}</span> 
            ))
        }
    </>
    )
    
    
    }
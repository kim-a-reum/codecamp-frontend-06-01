import { gql, useQuery } from "@apollo/client";
import ProductList from "../../src/components/units/27-01-basket";

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
        }
    }
`

export default function BasketPage(){
    const {data} = useQuery(FETCH_BOARDS)

    console.log(data)
        return (
            <>
            <div>
            {data?.fetchBoards.map((el) => (
                <ProductList key={el._id}  
                            el={el}
                />
                ))}
          </div>
                </>

        )
}
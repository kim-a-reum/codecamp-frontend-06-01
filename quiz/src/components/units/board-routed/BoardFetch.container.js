import {useQuery} from '@apollo/client' 
import { useRouter } from 'next/router'
import BoardFetchedUI from './BoardFetch.presenter'
import { FETCH_BOARD } from './BoardFetch.queries'



export default function BoardFetched(){
    const router = useRouter()
    console.log(router)
    
        const { data } = useQuery(FETCH_BOARD,
                {variables : {number:Number(router.query.number)}
            })
        console.log(data) 

return (
<BoardFetchedUI
 data = {data}
/>

)
}
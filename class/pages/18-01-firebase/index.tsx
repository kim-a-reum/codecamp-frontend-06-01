import {collection, getFirestore, addDoc, getDocs} from 'firebase/firestore/lite'
import { firebaseApp } from '../_app'

export default function FirebasePage(){



    const onClickSubmit = async () =>{

        // firebase에 데이터 한줄 등록하기 
       const board =  collection(getFirestore(firebaseApp),"board");
       await addDoc(board,{
           writer:"아름",
           title:"제발",
           contents:"되게해주세요",
       })
    }

    const onClickFetch = async () =>{

        // firebase에 데이터 꺼내오기 
        const board =  collection(getFirestore(firebaseApp),"board");
        const result = await getDocs(board)
        const datas = result.docs.map((el)=>el.data())
        // 각각에 대해서 .data를 해야 꺼내지기 때문엥! 
        console.log(datas)
        
    }


    return(
        <>
        <div>파이어베이스 연습!!</div>
        <button onClick={onClickSubmit}>등록</button>
        <button onClick={onClickFetch}>조회</button>
        </>
    )
}
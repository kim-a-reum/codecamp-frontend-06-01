import { useMutation } from "@apollo/client"
import {useForm} from "react-hook-form"
import { ModalError } from "../../utility"
import { CREATE_USED_ITEM } from "./createUsedItem.query"
import "antd/dist/antd.css"

interface IFormValues {
    name? : string,
    contents?: string,
    price?: number,
    remarks?: string ,
   


}


export default function CreateUsedItemPage(){
    const [createUsedItem] = useMutation(CREATE_USED_ITEM)
    const {register, handleSubmit} = useForm({
        mode:"onChange",
    })  

    const onClickSubmit = async(data: IFormValues)=>{
        try{

           const result = await createUsedItem({
                variables:{
                    createUseditemInput:{

                        name: data.name,
                        contents: data.contents,
                        price: Number(data.price),
                        remarks: data.remarks,
                        
                    }
                    
                }
            })
            console.log(result)
        } catch (error){
            ModalError({content: "오류가 발생했습니다"})
        }

console.log(data)
        
    }
    return(
        <>
        <form onSubmit={handleSubmit(onClickSubmit)}>
            
            판매상품 : <input type = "text" {...register("name")}/>
            내용 : <input type = "text" {...register("contents")}/>
            가격 : <input type = "text" {...register("price")}/>
            부가정보 : <input type = "text" {...register("remarks")}/>
            <button >상품 올리기</button>
       </form>
        </>
    )
}
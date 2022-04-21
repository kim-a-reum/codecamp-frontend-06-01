import { useMutation } from "@apollo/client"
import { useForm } from "antd/lib/form/Form"
import { CREATE_USED_ITEM } from "./createUsedItem.query"

interface IFormValues {
    id? : string,
    password?: string, 
    
}


export default function CreateUsedItemPage(){
    const [createUsedItem] = useMutation(CREATE_USED_ITEM)
    const {register, handleSubmit} = useForm({
        mode:"onChange",
    })
    const onClickSubmit = async(data: IFormValues)=>{
        await createUsedItem({
            variables:{

            }
        })


    }

    return(
        <>
        <form onSubmit={handleSubmit(onClickSubmit)}>
            
            이름 : <input type = "text" {...register("name")}/>
            판매상품 : <input type = "text" {...register("name")}/>
            판매상품 : <input type = "text" {...register("name")}/>
            판매상품 : <input type = "text" {...register("name")}/>
            <button >로그인하기</button>
       </form>
        </>
    )
}
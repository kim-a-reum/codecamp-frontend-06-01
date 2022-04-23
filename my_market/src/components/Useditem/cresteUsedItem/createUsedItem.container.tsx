import { useMutation } from "@apollo/client"
import {useForm} from "react-hook-form"
import { ModalError } from "../../utility"
import { CREATE_USED_ITEM } from "./createUsedItem.query"
import "antd/dist/antd.css"
import CreateUsedItemPageUI from "./createUsedItem.presenter"

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
            variables: {
                createUseditemInput: {
                  name: data?.name,
                  remarks: data?.remarks,
                  contents: data?.contents,
                  price: Number(data?.price),

                },
              },
            })
            console.log(result)
        } catch (error){
            ModalError({content: "오류가 발생했습니다"})
        }


        
    }
    return(
        <>
    <CreateUsedItemPageUI
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
    />
        </>
    )
}
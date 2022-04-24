import { useMutation } from "@apollo/client"
import {useForm} from "react-hook-form"
import { ModalError, Modalsuccess } from "../../utility"
import { CREATE_USED_ITEM } from "./createUsedItem.query"
import "antd/dist/antd.css"
import CreateUsedItemPageUI from "./createUsedItem.presenter"
import Router, { useRouter } from "next/router"

interface IFormValues {
    name? : string,
    contents?: string,
    price?: number,
    remarks?: string ,



}


export default function CreateUsedItemPage(){
    const router = useRouter()
    const [createUsedItem] = useMutation(CREATE_USED_ITEM)
    const {register, handleSubmit, trigger,setValue} = useForm({
        mode:"onChange",
    })  
    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        trigger("contents");
      };

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
            Modalsuccess({content: "상품등록완료! 상품목록페이지로 이동합니다"})
            router.push('/main')
            
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
        onChangeContents={onChangeContents}
    />
        </>
    )
}
import { useMutation } from "@apollo/client"
import {useForm} from "react-hook-form"
import { ModalError, Modalsuccess } from "../../utility"
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createUsedItem.query"
import "antd/dist/antd.css"
import CreateUsedItemPageUI from "./createUsedItem.presenter"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ImyupdateUseditemInput, IMyVariables } from "./createUseditem.types"


interface IFormValues {
    name? : string,
    contents?: string,
    price?: number,
    remarks?: string ,
    tags?: string,
    address?: string,



}


export default function CreateUsedItemPage(props : any){
    const router = useRouter()
    const [createUsedItem] = useMutation(CREATE_USED_ITEM)
    const [updateUsedItem] = useMutation(UPDATE_USED_ITEM)
    const {register, handleSubmit, trigger,setValue} = useForm({
        mode:"onChange",
    })  
    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        trigger("contents");
      };
    //   파일업로드 부분
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const fileRef = useRef<HTMLInputElement>(null)
  
  const onChangeFileUrls = (fileUrl:string, index: number) =>{
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
    
  }
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  const myupdateUseditemInput : ImyupdateUseditemInput= {};

  const myVariables: IMyVariables = {
    updateUseditemInput: myupdateUseditemInput,
    useditemId: String(router.query.itemid)
  };

    const onClickSubmit = async(data: IFormValues)=>{
        
        if(props.isEdit){
            console.log(data)
            if (data.name) {myupdateUseditemInput.name =data.name}
            if (data.remarks) {myupdateUseditemInput.remarks = data.remarks}
            if (data.contents) {myupdateUseditemInput.contents = data.contents}
            if (data.price) {myupdateUseditemInput.price = data.price}
            // if (data.images.fileUrls) {myupdateUseditemInput.images = data.;}
            
            try{

                
                const result = await updateUsedItem({
                    variables: myVariables,
                })
                console.log(result)
                Modalsuccess({content: "상품수정완료! 상품 상세조회 페이지로 이동합니다"})
                router.push(`/main/${router.query.itemid}`)
                
            } catch (error){
                
              
                ModalError({content: " 상품 수정 오류가 발생했습니다"})
            }
        }else{
            try{
                
                const result = await createUsedItem({
                    variables: {
                        createUseditemInput: {
                            name: data?.name,
                            remarks: data?.remarks,
                            contents: data?.contents,
                            price: Number(data?.price),
                            tags: data.tags,
                            images: fileUrls,
                            useditemAddress: {
                                address: data.address
                            }
                        },
                    },
                })
                console.log(result)
                Modalsuccess({content: "상품등록완료! 상품목록페이지로 이동합니다"})
                router.push('/main')
                
            } catch (error){
                ModalError({content: " 상품 등록 오류가 발생했습니다"})
            }
        }
    }
    return(
        <>
    <CreateUsedItemPageUI
        isEdit={props.isEdit}
        fileRef = {fileRef}
        fileUrls={fileUrls}
        data={props.data}
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        onChangeContents={onChangeContents}
        onChangeFileUrls={onChangeFileUrls}

        
    />
        </>
    )
}
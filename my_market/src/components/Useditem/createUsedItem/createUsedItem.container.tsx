import { useMutation } from "@apollo/client"
import {useForm} from "react-hook-form"
import { ModalError, Modalsuccess } from "../../utility"
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createUsedItem.query"
import "antd/dist/antd.css"
import CreateUsedItemPageUI from "./createUsedItem.presenter"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ImyupdateUseditemInput, IMyVariables } from "./createUseditem.types"
import { useRecoilState, useRecoilStateLoadable } from "recoil"
import { MapaddressState } from "../../../commons/store"


interface IFormValues {
    name? : string,
    contents?: string,
    price?: number,
    remarks?: string ,
    tags?: string,
    address?: string,
    addressdetail? : string



}


export default function CreateUsedItemPage(props : any){
    const [isOpen, setIsOpen] = useState(false);
    const [mapAddress, setMapAddress] = useRecoilState(MapaddressState)
    const [editMapAddress, seteditMapAddress] = useState()
    const [addressData, SetaddressData] = useState({})
    const [hashtag,setHashtag] = useState("")
    const [hashArr, setHashArr] = useState([])
    const router = useRouter()
    const [createUsedItem] = useMutation(CREATE_USED_ITEM)
    const [updateUsedItem] = useMutation(UPDATE_USED_ITEM)
    const {register, handleSubmit, trigger,setValue, reset, getValues} = useForm({
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
      console.log(props.data)
    reset({ contents: props.data?.fetchUseditem.contents });
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
    
  }, [props.data,mapAddress]);
  useEffect(() => {
    if(props.data?.fetchUseditem?.tags){

        setHashArr(props.data?.fetchUseditem?.tags)
    }
  
}, [props.data?.fetchUseditem?.tags]);

  const myupdateUseditemInput : ImyupdateUseditemInput= {};

  const myVariables: IMyVariables = {
    updateUseditemInput: myupdateUseditemInput,
    useditemId: String(router.query.itemid)
  };
  const deleteTag = (event)=>{
    console.log("wlqrk")
    const newHashArr = [...hashArr]
    newHashArr.pop()
    setHashArr(newHashArr)
    console.log(newHashArr)
  }
  console.log(mapAddress)
  console.log(editMapAddress)
    const onClickSubmit = async(data: IFormValues)=>{
     
        if(props.isEdit){
            console.log(data)
            if (data.name) {myupdateUseditemInput.name =data.name}
            if (data.remarks) {myupdateUseditemInput.remarks = data.remarks}
            if (data.contents) {myupdateUseditemInput.contents = data.contents}
            if (data.price) {myupdateUseditemInput.price = Number(data.price)}
            // if (editMapAddress) {myupdateUseditemInput.useditemAddress.address= mapAddress}
            
            
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
                            tags: hashArr,
                            images: fileUrls,
                            useditemAddress: {
                                address: mapAddress,
                                addressDetail: data.addressdetail
                            }
                        },
                    },
                })
                console.log(data.contents)
                Modalsuccess({content: "상품등록완료! 상품목록페이지로 이동합니다"})
                router.push('/main')
                
            } catch (error){
                ModalError({content: " 상품 등록 오류가 발생했습니다"})
            }
        }
    }
    const onClickopenModal = () => {
        setIsOpen((prev)=>!prev);
      };
    const onCompleteAddressSearch = (data : any) =>{
        SetaddressData(data)
        setMapAddress(data.address)
    }
    const onKeyUpHash = (event: any)=>{

        if(event.keyCode === 32 && event.target.value !== " "){
            setHashArr([...hashArr, "#" + event.target.value])
            event.target.value = "";
        }
        
    }

    return(
        <>
    <CreateUsedItemPageUI
        isEdit={props.isEdit}
        fileRef = {fileRef}
        fileUrls={fileUrls}
        data={props.data}
        isOpen={isOpen}
        addressData={addressData}
        mapAddress={mapAddress}
        hashArr={hashArr}
        hashtag={hashtag}
        seteditMapAddress={seteditMapAddress}
        getValues={getValues}
        deleteTag={deleteTag}
        onKeyUpHash={onKeyUpHash}
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        onChangeContents={onChangeContents}
        onChangeFileUrls={onChangeFileUrls}
        onClickopenModal={onClickopenModal}
        onCompleteAddressSearch={onCompleteAddressSearch}
        

        
    />
        </>
    )
}
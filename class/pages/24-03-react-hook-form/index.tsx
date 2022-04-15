import { useForm } from "react-hook-form"

interface IFormValues {
    writer?: string
    title?: string
    contents?: string
    boardAddress?: {}
    addressDetail?: string

}

export default function ReactHookFormPage(){
    const {register, handleSubmit} = useForm()
    const onClidkSubmit = (data: IFormValues)=>{
        console.log(data)


    }
    console.log("리렌더링체크")
    return(
        <form onSubmit={handleSubmit(onClidkSubmit)}>
            작성자 : <input type="text" {...register("Writer")}/>
            제목 : <input type="text"{...register("Title")}/>
            내용 : <input type="text"{...register("Contents")}/>
            주소 : <input type="text"{...register("boardAddress.addressDetail")}/>
            <button>등록하기</button>
        </form>
    )
}
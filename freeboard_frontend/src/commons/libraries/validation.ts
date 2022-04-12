import { ModalWarning } from "../../components/utility"

export const checkFileValidation = (file?: File )=>{
    if(!file?.size){
        ModalWarning({content:" 파일이 없습니다 ! "})
        return false }
      if(file?.size > 5 * 1024 *1024){
        ModalWarning({content:" 파일이 너무커요 ! "})
        return false }
      // if(!file.type.includes("jpeg")|| !file.type.includes("png")){
      //   ModalWarning({content:" jpeg파일 또는 png 파일만 업로드 가능합니다"})
      //   return}
  return true 
}

export const getDate = (date : any) => {
  const newdate = new Date(date)
  const yyyy = newdate.getFullYear()
  const mm = newdate.getMonth() + 1
  const dd = newdate.getDate()
  return `${yyyy}-${mm}-${dd}`
}
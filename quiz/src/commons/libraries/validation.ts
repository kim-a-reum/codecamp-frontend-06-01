export const checkFileValidation = (myfile? : File) =>{
    if(!myfile?.size){
        alert("파일이 없습니다!")
        return false
    }
    if(myfile?.size > 5 * 1024 * 1024 ){
        alert("파일이 너무커요.. 5MB 제한입니다..")
        return false
    }
    // if(!myfile.type.includes("jpeg") || !myfile.type.includes("png") ){
    //     alert("jpeg아니면 png파일만 가능하답니다")
    //     return false
    // }
    return true;
}
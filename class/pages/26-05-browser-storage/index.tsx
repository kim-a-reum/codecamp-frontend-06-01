export default function BrowserStoragePage(){

    const onClickSaveCookie =()=>{
        document.cookie = "aaa=몰리"
        document.cookie = "zzz=맹구"
        document.cookie = "aaa=몰라"

    }
    const onClickSaveLocalStorage =()=>{
        localStorage.setItem("bbb","아름")
        
    }
    const onClickSaveSessionStorage =()=>{
        sessionStorage.setItem("ccc","뿡뿡")
        
    }

    const onClickLoadCookie =()=>{
        const myCookie = document.cookie
        console.log(myCookie)
        // const myCookie2 = document.cookie.split(";").filter(el=>el.includes("aaa="))
        const myCookie2 = document.cookie.split(";").filter(el=>el.startsWith("aaa="))
        console.log(myCookie2)
    }
    const onClickLoadLocalStorage =()=>{
        const bbb = localStorage.getItem("bbb")
        console.log(bbb)
        
    }
    const onClickLoadSessionStorage =()=>{
        const ccc = sessionStorage.getItem("ccc")
        console.log(ccc)
        
    }


    return (
        <div>
            <button onClick={onClickSaveCookie}> 쿠키에 저장 </button>
            <button onClick={onClickSaveLocalStorage}> 로컬스토리지에 저장 </button>
            <button onClick={onClickSaveSessionStorage}> 세션스토리지에 저장 </button>
            ====================================================================
            <button onClick={onClickLoadCookie}> 쿠키 조회 </button>
            <button onClick={onClickLoadLocalStorage}> 로컬스토리지 조회 </button>
            <button onClick={onClickLoadSessionStorage}> 세션스토리지 조회 </button>
        </div>
    )
}
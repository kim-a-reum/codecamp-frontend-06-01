//그냥 08 03이랑 연결해준거 실습 ! 

export default function BoardComponent(props){

    return( 
    <div>
        <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
        {/* // 맞으면 첫번째꺼 틀리면 등록이기 때문에 굳이 === true 안써준다  */}
        제목 : <input type = "text"/><br/>
        내용 : <input type = "text"/><br/>
        
        <button> {props.isEdit === true ? "수정" : "등록"} 하기 </button>
    </div>
)

    

}
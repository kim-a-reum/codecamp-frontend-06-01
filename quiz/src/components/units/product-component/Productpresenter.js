//제품 등록, 수정 페이지의 프레젠터 

export default function ProductUI(props){
    
    return (
    <div>
        <h1>{props.isEdit ? "수정" : "등록"}페이지 </h1>
        판매자 : <input type="text" onChange={props.onChangeWriter} /><br />
        상품명 : <input type="text" onChange={props.onChangeProduct} /><br />
        상품 내용: <input type="text" onChange={props.onChangeContents} /><br />
        상품 가격: <input type="text" onChange={props.onChangePrice} />원<br />
        <button onClick={props.isEdit ? props.OnClickUpdate : props.OnClickCreate}> 상품 {props.isEdit ? "수정": "등록"}하기!!!</button>
    </div>

)}
export default function HofPage() {
  const onClickButton = (el) => (event) => {
    console.log(el);
  };

  return (
    <>
      <h1>HOF 연습 페이지</h1>
    
        <button onClick={onClickButton(123)}>누르기
        </button>
     
    </>
  );
}
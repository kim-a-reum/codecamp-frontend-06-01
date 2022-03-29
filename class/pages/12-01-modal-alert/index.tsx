import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "성공입니다 또 한번 성장했습니다 " });
  };
  const onClickFailButton = () => {
    Modal.error({
      content:
        " 지금은 실패와 에러지만, 성공으로 가는 필수 요소입니다. 또 한 번 성공에 한 발짝 다가갔습니다 ",
    });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공하자</button>
      <button onClick={onClickFailButton}>실패는 필수불가결이지</button>
    </>
  );
}

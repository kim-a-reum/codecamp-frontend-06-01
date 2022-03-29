import { ChangeEvent, useState } from "react";
import { Modal, Button } from "antd";
// 함수형 컴포넌트라서 우리가 쓰기 편하네? 예전에는 antdesign이 클래스형 컴포넌트를 만들다가 이제 함수형으로 만드는거다 !
const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {/* //primary는 안트디자인에서 사용하고 있는 메인색깔 */}
        비밀번호 486
      </Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력:{password}{" "}
        <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
};

export default ModalCustomPage;

// function을 함수형으로 바꾸는 방법이다 위에 걍 export default function ModalCustomPage 이라고 써도댐
// input창을 꾸밀수도 있고,

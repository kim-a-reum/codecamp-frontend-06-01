import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
    // 기존값을 가지고 와서 바꿔준다
  };

  const handleComplete = (data: any) => {
    //
    console.log(data);
    onToggleModal();
  };
  return (
    <>
      <Button onClick={onToggleModal}>집을 찾자</Button>

      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;

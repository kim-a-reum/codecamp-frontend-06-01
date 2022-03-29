import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");
  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log(data);
    setData(data.address);
    showModal();
    setIsOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal}>가고싶은곳을 찾아보자</Button>
      {isOpen && (
        <Modal visible={true} onOk={showModal} onCancel={showModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <p>내가 가고싶은 곳 : {data}</p>
    </div>
  );
};

export default ModalCustomPage;

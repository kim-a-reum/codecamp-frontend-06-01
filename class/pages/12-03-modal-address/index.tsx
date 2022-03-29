import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustomPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    //  주소에 대한 데이터가 들어오니까!
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>집을 찾자</Button>
      {/* 모달을 삭제하고 새로 만드는 방법 */}
      {/* isopen이 true니까 열리고 취소하면 false가 되니까 다시 끄고 다시 리렌더링 되어서 true되면 다시 새거가 열리도록 ! 새거모달이 열리게 해주는 형식이당   */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* 모달을 숨겼다가 나타나게 하는 방법 */}
      {/* <Modal
        title="Basic Modal"
        visible={isOpen} 
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
};

export default ModalCustomPage;

// function을 함수형으로 바꾸는 방법이다 위에 걍 export default function ModalCustomPage 이라고 써도댐
// 주소가 반드시 모달안에 있어야 하는것은 아니다 클릭하면 모달이 뜨게 설정을 해놓은것일뿐!
// 근데 대신에 종료할때 postcode만 사라지고 모달이 안사라지니가 동시에 모달도 사라지게끔 setisopen을 false로 주면서 모달을 사라지게 한다

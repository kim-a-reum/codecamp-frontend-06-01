import React, { useState } from "react";
import { Modal, Button } from "antd";
import styled from "@emotion/styled";

export default function App() {
  const [visible, setVisible] = useState(false);
  const MyButton = styled(Button)`
    background-color: pink;
  `;
  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <MyButton onClick={openModal}>모달을 열어보자</MyButton>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>게시글 등록</p>
        <hr />
        <p>게시글 등록이 완료되었습니다</p>
      </Modal>
    </>
  );
}

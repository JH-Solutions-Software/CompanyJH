// DynamicModal.js
import React from 'react';
import { Modal, Button } from 'antd';
import '../assets/styles/Modal.css'

const DynamicModal = ({ title, children, isVisible, close, footer, width }) => {
  const handleOk = () => {
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <>
      <Modal
        title={title}
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
        width={width}
        className="custom-modal"
      >
        {children}
      </Modal>
    </>
  );
};

export default DynamicModal;

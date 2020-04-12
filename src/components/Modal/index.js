import React from 'react';
import Modal from 'react-modal';

const ModalCMP = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  modaltitle,
  ...props
}) => {
  return (
    <Modal
      contentLabel={modaltitle}
      isOpen={modalIsOpen}
      style={customStyles}
    >
     <div className="modal__container">
        <header className="modal__header header">
          <h2 className="header__title">{ modaltitle }</h2>
          <button className="header__button header__button--close" type="button" onClick={closeModal}>close</button>
        </header>
        <div className="modal__content">
          {props.children}
        </div>
     </div>
    </Modal>
  )
}

export default ModalCMP;

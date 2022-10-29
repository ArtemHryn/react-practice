import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [closeModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

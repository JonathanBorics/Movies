/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import {
  CloseIcon,
  IFrame,
  Modal,
  ModalHeader,
  ModalTitle,
} from '../../styles/Home/TrailerModal.styled';

//Set the app element for React Modal
Modal.setAppElement('#root');

const TrailerModal = ({ isOpen, setIsOpen, movie }) => {
  //Disable scrolling on load
  useEffect(() => {
    if (isOpen) document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, .8)',
          zIndex: '10000',
        },
      }}
    >
      <ModalHeader>
        <ModalTitle>{movie?.title}</ModalTitle>
        <CloseIcon onClick={() => setIsOpen(false)} />
      </ModalHeader>
      <IFrame
        src={`https://www.youtube.com/embed/${movie?.trailer?.key}`}
        title={movie?.trailer?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></IFrame>
    </Modal>
  );
};

export default TrailerModal;

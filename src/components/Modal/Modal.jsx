import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    maxWidth: 'calc(100vw - 48px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },

  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

export const ShowModal = ({ isOpen, closeModal, src, alt }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};

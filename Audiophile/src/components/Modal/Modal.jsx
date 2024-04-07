/* eslint-disable react/prop-types */
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={onClose}>×</span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
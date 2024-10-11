import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  // useEffect is used to run the actual showModal and close after the
  // jsx has rendered and the dialog is actually associated with the modal.
  useEffect(() => {
    if(open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [open]);   // adds dependencies here, ie props/state that the effect is dependent upon that can cause a refender.

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;

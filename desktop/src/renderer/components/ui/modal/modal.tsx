import IconRemove from 'assets/icons/icon-remove';
import Button from '../button/button';
import { ButtonClose } from '../button/button-styles.css';
import { ModalContent, ModalStyles } from './modal-styles.css';
import { Modal } from 'renderer/utils/types';
import { useScrollLock } from 'renderer/hooks/use-scroll-lock';

const Modal = ({ children, isShown, onClose }: Modal) => {
useScrollLock(isShown)

  return (
    <div
      className={isShown ? ModalStyles.show : ModalStyles.basic}
      onClick={onClose}
    >
      <div className={ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}

        <div className={ButtonClose.filter}>
          <Button variant="reset" type="button" onClick={onClose}>
            <IconRemove variant="small" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

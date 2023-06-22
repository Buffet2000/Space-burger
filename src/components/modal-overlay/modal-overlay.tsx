import styles from './modal-overlay.module.css';

export default function ModalOverlay({handleClose}: {handleClose: (() => void)}) {
  
  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
    </div>
  );
}
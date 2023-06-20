import { FC } from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export const ModalOverlay: FC = ({handleClose}) => {
  
  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}
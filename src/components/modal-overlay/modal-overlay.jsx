import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';


export default function ModalOverlay({handleClose}) {
  
  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}
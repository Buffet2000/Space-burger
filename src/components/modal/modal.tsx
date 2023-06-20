import { useEffect, FC } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay"

export const Modal: FC = ({ title, children, handleClose }) => {

  useEffect(() => {
    const closeByEsc = (e) => (e.key === "Escape" ? handleClose() : null);
    document.addEventListener("keydown", closeByEsc);
    
    return () => document.removeEventListener("keydown", closeByEsc);
  },[]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <p className="text text_type_main-large mt-3 mb-3">{title}</p>
        <button className={styles.button_close} onClick={handleClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired, 
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
}
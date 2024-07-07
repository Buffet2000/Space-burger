import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay"

type ModalProps = {
  title?: string,
  children: JSX.Element,
  handleClose: (() => void),
}

const modal = document.getElementById('modal') as HTMLElement;

export default function Modal({ title, children, handleClose }: ModalProps) {

  useEffect(() => {
    const closeByEsc = (e: KeyboardEvent) => (e.key === "Escape" ? handleClose() : null);
    document.addEventListener("keydown", closeByEsc);

    return () => document.removeEventListener("keydown", closeByEsc);
  }, [handleClose]);

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
    modal
  );
}
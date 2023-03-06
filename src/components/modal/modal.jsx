import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Modal( {title, content, active, setActive} ) {
  return (
    <div className={active ? `${styles.modal} ${styles.modal_active}` : styles.modal}>
      <p className="text text_type_main-large mt-3 mb-3">{title}</p>
      <button className={styles.button_close} onClick={() => setActive(false)}>
        <CloseIcon type="primary" />
      </button>
      {content}
    </div>
  );
}
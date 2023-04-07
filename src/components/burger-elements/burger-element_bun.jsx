import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";
import { DataType } from "../../utils/dataType";

export default function BurgerBun({ data, containerType, isLocked, hideIco, nameType }) {
  return (
      <div className={styles.ingredient_container}>
        <div className={hideIco}>
          <DragIcon type="primary" />
        </div>
        {data && (
          <ConstructorElement
            type={containerType}
            isLocked={isLocked}
            text={`${data.name} ${nameType}`} //поравил верх/низ.
            price={data.price}
            thumbnail={data.image}
          />
        )}
      </div>
  );
}

BurgerBun.propTypes = {
  data: PropTypes.objectOf(DataType.isRequired).isRequired, //Не понимаю, почему консоль ругается на data._id. Ведь это string.
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
};
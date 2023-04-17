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
            text={`${data.name} ${nameType}`}
            price={data.price}
            thumbnail={data.image}
          />
        )}
      </div>
  );
}

BurgerBun.propTypes = {
  data: DataType.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
  nameType: PropTypes.string,
};
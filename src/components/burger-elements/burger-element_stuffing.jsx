import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";

export default function BurgerStuffing({ data }) {
  return (
      <div className={styles.ingredient_container}>
        <div>
          <DragIcon type="primary" />
        </div>
        {data && (
          <ConstructorElement
            text={data.name}
            price={data.price}
            thumbnail={data.image}
          />
        )}
      </div>
  );
}

BurgerStuffing.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
};
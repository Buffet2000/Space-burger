import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";
import { DataType } from "../../utils/dataType";
import { IngredientContext } from "../../services/ingredient-context";

export default function BurgerElement({ id, type, isLocked, hideIco }) {
  const data = React.useContext(IngredientContext)
  const ingredient = data.find((ingr) => ingr._id === id);
   return (
    <div className={styles.ingredient_container}>
      <div className={hideIco}>
        <DragIcon type="primary" />
      </div>
      {ingredient && (
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      )}
    </div>
  );
}

BurgerElement.propTypes = {
  data: PropTypes.arrayOf(DataType.isRequired).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
};
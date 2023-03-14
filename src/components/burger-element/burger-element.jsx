import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";

export default function BurgerElement({ data, id, type, isLocked, hideIco }) {
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

const DataType = PropTypes.shape({
  _id: PropTypes.string, //здесь я написал только те данные data, которые используются. Надеюсь, что задумка в этом. Ещё раз огромное спасибо за обратную связь.
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
});

BurgerElement.propTypes = {
  data: PropTypes.arrayOf(DataType.isRequired).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  hideIco: PropTypes.string,
};
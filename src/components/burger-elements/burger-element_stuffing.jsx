import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";
import { useDrag, useDrop } from "react-dnd/dist/hooks";
import { useDispatch } from "react-redux";
import { moveIngredientInConstructor, deleteIngredient } from "../../services/actions/constructor-ingredients";

export default function BurgerStuffing({ data, index }) {
  const dispatch = useDispatch();
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
            handleClose={() => dispatch(deleteIngredient(index))}
          />
        )}
      </div>
  );
}

BurgerStuffing.propTypes = {
  data: PropTypes.object.isRequired,
};
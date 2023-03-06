import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredient.module.css";

export default function BurgerIngredient({ data }) {
  const [ModalActive, setModalActive] = React.useState(false);

  return (
    <>
      <Modal
        title={"Детали ингредиента"}
        content={
          <IngredientDetails
            title={data.name}
            img={data.image_large}
            carbohydrates={data.carbohydrates}
            proteins={data.proteins}
            fat={data.fat}
            calories={data.calories}
          />
        }
        active={ModalActive}
        setActive={setModalActive}
      />
      <div
        className={styles.ingredients_card}
        onClick={() => setModalActive(true)}
      >
        <Counter count={9} size="default" />
        <img className={styles.ingImage} src={data.image} alt={data.name} />
        <div className={styles.ingredients_price}>
          <p className="text text_type_digits-default">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{data.name}</p>
      </div>
    </>
  );
}

const IngredientPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

BurgerIngredient.propTypes = {
  data: IngredientPropType.isRequired,
};

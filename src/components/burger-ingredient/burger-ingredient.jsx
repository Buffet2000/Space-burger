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
  const [modalActive, setModalActive] = React.useState(null);
  const [ingrediantData, setIngredientData] = React.useState(null) //тут не совсем понял из примера. То ли true, то ли null. Предпологаю, что null подходит. Видимо суть в том, что если отправить в "{}" true, то код сработает, но не корректно.

  function handleClose() {
    setModalActive(false);
    setIngredientData({});
  }

  return (
    <>
      {modalActive && <Modal
        title={"Детали ингредиента"}
        children={
          <IngredientDetails
            data={ingrediantData}
          />
        }
        active={modalActive}
        setActive={setModalActive}
        handleClose={handleClose}
      />}
      <div
        className={styles.ingredients_card}
        onClick={() => {setModalActive(true); setIngredientData(data)}}
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

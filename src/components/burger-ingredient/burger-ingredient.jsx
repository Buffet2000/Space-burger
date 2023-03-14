import React from "react";
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredient.module.css";
import { DataType } from "../../utils/dataType";

export default function BurgerIngredient({ data }) {
  const [modalActive, setModalActive] = React.useState(null);
  const [ingrediantData, setIngredientData] = React.useState(null)

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

BurgerIngredient.propTypes = {
  data: DataType.isRequired,
};

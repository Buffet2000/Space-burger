import React from "react";
import PropTypes from "prop-types";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredient.module.css";
import { DataType } from "../../utils/dataType";
import { useDrag } from 'react-dnd';
import { useSelector } from "react-redux";

export default function BurgerIngredient({ data }) {
  const [modalActive, setModalActive] = React.useState(null);
  const [ingredientData, setIngredientData] = React.useState(null);
  
  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients);
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);

  function handleClose() {
    setModalActive(false);
    setIngredientData({});
  }

  function handleOpen(e) {
    e.stopPropagation();
    setIngredientData(data);
    setModalActive(true);
  }

  const count = React.useMemo(() => {
    const allIngredients = [...constructorIngredients, ...constructorBuns]
    return allIngredients.filter(item => item._id === data._id).length;
  }, [constructorIngredients, constructorBuns])

  //const count = 0;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });

  return (
    <>
      {modalActive && <Modal
        title={"Детали ингредиента"}
        children={
          <IngredientDetails
            data={ingredientData}
          />
        }
        handleClose={handleClose}
      />}
      <div
        ref={dragRef}
        className={styles.ingredients_card}
        onClick={handleOpen}
      >
        {count === 0 ? null : <Counter count={count} size="default" />}
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
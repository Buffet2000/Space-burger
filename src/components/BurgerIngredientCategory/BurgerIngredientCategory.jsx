import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

export default function BurgerIngredientCategory({ data, ingr_type, name, style }) {
  return (
    <div className="mt-10">
      <p className="text text_type_main-medium mb-6">{name}</p>
      <div className={style}>
        {data
          .filter((ingr) => ingr.type === ingr_type) //И тут строгое сравнение? Это например не массив и здесь нужно 100% соответсвие? Пытаюсь понять на будущее.
          .map((data) => (
            <BurgerIngredient key={data._id} data={data} />
          ))}
      </div>
    </div>
  );
}

BurgerIngredientCategory.propTypes = {
  data: PropTypes.array,
  ingr_type: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.string
};
import React from "react";
import PropTypes from 'prop-types';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

export default function BurgerIngredientCategory({ data, ingr_type, name, style }) {
  return (
    <div className="mt-10">
      <p className="text text_type_main-medium mb-6">{name}</p>
      <div className={style}>
        {data
          .filter((ingr) => ingr.type === ingr_type)
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
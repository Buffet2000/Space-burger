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

const IngredientType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile:  PropTypes.string,
  image_large:  PropTypes.string,
  __v: PropTypes.number
});

BurgerIngredientCategory.propTypes = {
  data: PropTypes.arrayOf(IngredientType.isRequired).isRequired,
  ingr_type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};
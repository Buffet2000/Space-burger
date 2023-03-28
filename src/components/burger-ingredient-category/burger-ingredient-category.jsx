import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { DataType } from "../../utils/dataType";
import { IngredientContext } from "../../services/ingredient-context";

export default function BurgerIngredientCategory({ ingr_type, name, style }) {
  const data = React.useContext(IngredientContext)
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
  data: PropTypes.arrayOf(DataType.isRequired).isRequired,
  ingr_type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

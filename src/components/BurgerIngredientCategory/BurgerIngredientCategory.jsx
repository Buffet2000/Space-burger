import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

export default function BurgerIngredientCategory({ data, ing_type, name, style }) {
  return (
    <div className="mt-10">
      <p className="text text_type_main-medium mb-6">{name}</p>
      <div className={style}>
        {data
          .filter((ing) => ing.type == ing_type)
          .map((data) => (
            <BurgerIngredient key={data._id} data={data} />
          ))}
      </div>
    </div>
  );
}

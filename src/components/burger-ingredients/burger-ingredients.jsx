import React from "react";
import Tabs from "../tabs/tabs"
import styles from "./burger-ingredients.module.css";
import BurgerIngredientCategory from "../burger-ingredient-category/burger-ingredient-category";
import { IngredientContext } from "../../services/ingredient-context";


export default function BurgerIngredients() {
  const data = React.useContext(IngredientContext)
  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <div className={styles.ingredients_container}>
        <BurgerIngredientCategory
          name="Булки"
          data={data}
          ingr_type="bun"
          style={styles.buns}
        />
        <BurgerIngredientCategory
          name="Соусы"
          data={data}
          ingr_type="sauce"
          style={styles.sauces}
        />
        <BurgerIngredientCategory
          name="Начинки"
          data={data}
          ingr_type="main"
          style={styles.stuffing}
        />
      </div>
    </section>
  );
}
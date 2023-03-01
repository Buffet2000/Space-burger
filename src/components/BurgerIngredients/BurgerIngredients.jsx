import React from "react";
import {
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { data } from "../../utils/data";
import BurgerIngredientCategory from "../BurgerIngredientCategory/BurgerIngredientCategory"

export default function BurgerIngredients() {
  const Tabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
      <div className={styles.ingredient_tabs}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    );
  };

  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <div className={styles.ingredients_container}>
        <BurgerIngredientCategory
          name="Булки"
          data={data}
          ing_type="bun"
          style={styles.buns}
        />
        <BurgerIngredientCategory
          name="Соусы"
          data={data}
          ing_type="sauce"
          style={styles.sauces}
        />
        <BurgerIngredientCategory
          name="Начинки"
          data={data}
          ing_type="main"
          style={styles.stuffing}
        />
      </div>
    </section>
  );
}
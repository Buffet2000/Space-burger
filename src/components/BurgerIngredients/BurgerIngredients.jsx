import React from "react";
import {
  Tab,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { data } from "../../utils/data";

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

  const IngredientsByType = ({ data, ing_type, name, style }) => {
    return (
      <div className="mt-10">
        <p className="text text_type_main-medium mb-6">{name}</p>
        <div className={style}>
          {data
            .filter((ing) => ing.type == ing_type)
            .map((data) => (
              <Ingredient data={data} />
            ))}
        </div>
      </div>
    );
  };

  const Ingredient = ({ data }) => {
    return (
      <div className={styles.ingredients_card}>
        <Counter count={9} size="default" />
        <img className={styles.ingImage} src={data.image} alt={data.name} />
        <div className={styles.ingredients_price}>
          <p className="text text_type_digits-default">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{data.name}</p>
      </div>
    );
  };

  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <div className={styles.ingredients_container}>
        <IngredientsByType
          name="Булки"
          data={data}
          ing_type="bun"
          style={styles.buns}
        />
        <IngredientsByType
          name="Соусы"
          data={data}
          ing_type="sauce"
          style={styles.sauces}
        />
        <IngredientsByType
          name="Начинки"
          data={data}
          ing_type="main"
          style={styles.stuffing}
        />
      </div>
    </section>
  );
}

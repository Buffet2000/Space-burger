import React from "react";
import {
  Tab,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { data } from "../../utils/data.js";

export default function BurgerIngredients() {
  const Tabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
      <div style={{ display: "flex" }}>
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

  const Ingredients = ({ data }) => {
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
        <div>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <div className={styles.buns}>
            {data
              .filter((ing) => ing.type == "bun")
              .map((data, type) => (
                <Ingredients key={type} data={data} />
              ))}
          </div>
        </div>
        <div className="mt-10">
          <p className="text text_type_main-medium mb-6">Соусы</p>
          <div className={styles.sauces}>
            {data
              .filter((ing) => ing.type == "sauce")
              .map((data, type) => (
                <Ingredients key={type} data={data} />
              ))}
          </div>
        </div>
        <div className="mt-10">
          <p className="text text_type_main-medium mb-6">Начинки</p>
          <div className={styles.stuffing}>
            {data
              .filter((ing) => ing.type == "main")
              .map((data, type) => (
                <Ingredients key={type} data={data} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

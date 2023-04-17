import React, { useRef } from "react";
import Tabs from "../tabs/tabs"
import styles from "./burger-ingredients.module.css";
import BurgerIngredientCategory from "../burger-ingredient-category/burger-ingredient-category";
import { IngredientContext } from "../../services/ingredient-context";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";


export default function BurgerIngredients() {
  const data = React.useContext(IngredientContext)
  const [current, setCurrent] = React.useState("bun");

  function scrollToCategory(tab) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const [ bunRef, scrollToBuns ] = useInView({ threshold: 0 });
  const [ sauceRef, scrollToSauces ] = useInView({ threshold: 0 });
  const [ mainRef, scrollToMain ] = useInView({ threshold: 0 });

  React.useEffect(() => {
    if (scrollToBuns) {
      setCurrent("bun");
    } else if (scrollToSauces) {
      setCurrent("sauce");
    } else if (scrollToMain) {
      setCurrent("main");
    }
  }, [ scrollToBuns, scrollToSauces, scrollToMain ]);

  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div className={styles.ingredient_tabs}>
      <Tab value="bun" active={current === "bun"} onClick={() => scrollToCategory("bun")}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={() => scrollToCategory("sauce")}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={() => scrollToCategory("main")}>
        Начинки
      </Tab>
    </div>
      <div className={styles.ingredients_container}>
        <BurgerIngredientCategory
          innerRef={bunRef}
          name="Булки"
          data={data}
          ingr_type="bun"
          style={styles.buns}
        />
        <BurgerIngredientCategory
          innerRef={sauceRef}
          name="Соусы"
          data={data}
          ingr_type="sauce"
          style={styles.sauces}
        />
        <BurgerIngredientCategory
          innerRef={mainRef}
          name="Начинки"
          data={data}
          ingr_type="main"
          style={styles.stuffing}
        />
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientCategory from "../burger-ingredient-category/burger-ingredient-category";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";

export default function BurgerIngredients() {

  function scrollToCategory(cat: string) {
    setCurrent(cat);
    const element = document.getElementById(cat);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const [bunRef, scrollToBuns] = useInView({ threshold: 0 });
  const [sauceRef, scrollToSauces] = useInView({ threshold: 0 });
  const [mainRef, scrollToMain] = useInView({ threshold: 0 });

  useEffect(() => {
    if (scrollToBuns) {
      setCurrent("bun");
    } else if (scrollToSauces) {
      setCurrent("sauce");
    } else if (scrollToMain) {
      setCurrent("main");
    }
  }, [scrollToBuns, scrollToSauces, scrollToMain]);

  const [current, setCurrent] = useState("bun");

  return (
    <section className={styles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Build a burger</h2>
      <div className={styles.ingredient_tabs}>
        <Tab value="bun" active={current === "bun"} onClick={() => scrollToCategory("bun")}>
          Buns
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={() => scrollToCategory("sauce")}>
          Sauces
        </Tab>
        <Tab value="main" active={current === "main"} onClick={() => scrollToCategory("main")}>
          Fillings
        </Tab>
      </div>
      <div className={styles.ingredients_container}>
        <BurgerIngredientCategory
          innerRef={bunRef}
          name="Buns"
          ingr_type="bun"
          style={styles.buns}
        />
        <BurgerIngredientCategory
          innerRef={sauceRef}
          name="Sauces"
          ingr_type="sauce"
          style={styles.sauces}
        />
        <BurgerIngredientCategory
          innerRef={mainRef}
          name="Fillings"
          ingr_type="main"
          style={styles.stuffing}
        />
      </div>
    </section>
  );
}
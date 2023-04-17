import React from "react";
import styles from "./tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Tabs({scroll}) {
  const [current, setCurrent] = React.useState("buns");
  const {bunsInView, sausesInView, mainInView} = scroll;
  return (
    <div className={styles.ingredient_tabs}>
      <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

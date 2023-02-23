import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.page}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  );
}

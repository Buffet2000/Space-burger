import React from "react";
import AppHeader from "../components/app-header/app-header";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector } from 'react-redux';



export default function HomePage() {
  const itemsLoading = useSelector((store) => store.ingredients.itemsLoading);
  const itemsError = useSelector((store) => store.ingredients.itemsError);

  return (
    <>
      <AppHeader />
      <div className={styles.page}>
        {itemsLoading && "Загрузка..."}
        <DndProvider backend={HTML5Backend}>
          {!itemsLoading && !itemsError && <BurgerIngredients />}
          {!itemsLoading && !itemsError && <BurgerConstructor />}
        </DndProvider>
      </div>
    </>
  );
} 
import React from "react";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from "./home-page.module.css";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector } from "../../services/types/hooks";


export default function HomePage() {
  const itemsLoaded = useSelector((store) => store.ingredients.itemsLoaded);
  const itemsError = useSelector((store) => store.ingredients.itemsFailed);

  return (
    <>
      <div className={styles.page}>
        {!itemsLoaded
        ? "Загрузка..."
        : <DndProvider backend={HTML5Backend}>
          {!itemsError && <BurgerIngredients />}
          {!itemsError && <BurgerConstructor />}
        </DndProvider>} 
      </div>
    </>
  );
} 
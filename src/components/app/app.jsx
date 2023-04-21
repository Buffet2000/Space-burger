import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsData } from "../../services/actions/all-ingredients";

export default function App() {

  const itemsLoading = useSelector((store) => store.ingredients.itemsLoading);
  const itemsError = useSelector((store) => store.ingredients.itemsError);

  const dispatch = useDispatch();
  React.useEffect(() => { dispatch(getIngredientsData()) }, [dispatch]);

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
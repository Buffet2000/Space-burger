import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import { getIngredients } from "../api/api";
import { IngredientContext } from "../../services/ingredient-context";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const getAllIngredients = () => {
      getIngredients()
      .then((data) => setData(data))
      .catch((err) => (console.error(`Произошла ошибка: ${err}`), setError(true)))
      .finally(() => setLoading(false))
  };

  React.useEffect(() => getAllIngredients(), []);

  return (
    <>
      <AppHeader />
      <div className={styles.page}>
        {loading && "Загрузка..."}
        {error && "Произошла ошибка"}
        <IngredientContext.Provider value={data.data}>
          {!loading && !error && <BurgerIngredients />}
          {!loading && !error && <BurgerConstructor />}
        </IngredientContext.Provider>
      </div>
    </>
  );
} 
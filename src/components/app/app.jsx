import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

export default function App() {
  const [state, setState] = React.useState({
    isLoading: true,
    hasError: false,
    data: [],
  });

  const getIngredients = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(console.log(`Произошла ошибка: ${res.status}`));
      })
      .then(({ data }) => setState({ ...state, data, isLoading: false }))
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  React.useEffect(() => getIngredients(), []);

  const { data, isLoading, hasError } = state;
  return (
    <>
      <AppHeader />
      <div className={styles.page}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading && !hasError && <BurgerIngredients data={data} />}
        {!isLoading && !hasError && <BurgerConstructor data={data} />}
      </div>
    </>
  );
}

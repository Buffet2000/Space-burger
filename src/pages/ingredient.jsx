import React,  { useEffect } from "react";
import styles from "./ingredient.module.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function IngredientDetailsPage() {

  const navigate = useNavigate();
  const { id } = useParams();
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const openedIngredient = itemsLoaded.find(item => item._id === id);

  /*useEffect(() => {
    if (itemsLoaded && !openedIngredient) {
      return (navigate('/*'))
    }
  }, [itemsLoaded]);*/

  return (
    console.log(openedIngredient) &&
    <div className={styles.container}>
      <h2 className="text text_type_main-large mt-3 mb-3">Детали ингредиента</h2>
      <img
        className={styles.ingredient_illustration}
        src={openedIngredient.image_large}
        alt={openedIngredient.name}
      ></img>
      <div>
        <div className={styles.ingredient_details}>
          <p className="text text_type_main-medium mb-8">
            {openedIngredient.name}
          </p>
          <div className={styles.nutrition_values}>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {openedIngredient.calories}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {openedIngredient.proteins}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {openedIngredient.fat}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {openedIngredient.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

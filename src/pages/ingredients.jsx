import React from "react";
import styles from "./ingredients.module.css";
import { useSelector } from "react-redux";

export default function IngredientDetailsPage() {

	const data = useSelector((store) => store.ingredientInformation.information);

  return (
    <>
      <img
        className={styles.ingredient_illustration}
        src={data.image_large}
        alt={data.name}
      ></img>
      <div>
        <div className={styles.ingredient_details}>
          <p className="text text_type_main-medium mb-8">
            {data.title}
          </p>
          <div className={styles.nutrition_values}>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {data.calories}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {data.proteins}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {data.fat}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {data.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
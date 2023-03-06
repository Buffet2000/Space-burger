import React from "react";
import styles from "./ingredient-details.module.css";

export default function IngredientDetails({img, title, proteins, fat, calories, carbohydrates}) {
  return (
    <>
      <img
        className={styles.ingredient_illustration}
        src={img}
        alt="Биокотлета из марсианской Магнолии"
      ></img>
      <div>
        <div className={styles.ingredient_details}>
          <p className="text text_type_main-medium mb-8">
            {title}
          </p>
          <div className={styles.nutrition_values}>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {calories}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {proteins}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {fat}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

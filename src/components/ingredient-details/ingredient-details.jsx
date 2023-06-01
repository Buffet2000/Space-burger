import React, { useEffect } from "react";
import styles from "./ingredient-details.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addIngredientInfo } from "../../services/actions/opened-ingredient";

export default function IngredientDetails({ data }) {
  const { id } = useParams();
  const storeOpenedIngredient = useSelector((store) => store.ingredientInformation.information);  
  
  console.log(storeOpenedIngredient);
  return (
    <>
      <img
        className={styles.ingredient_illustration}
        src={storeOpenedIngredient.image_large}
        alt={storeOpenedIngredient.name}
      ></img>
      <div>
        <div className={styles.ingredient_details}>
          <p className="text text_type_main-medium mb-8">
            {storeOpenedIngredient.name}
          </p>
          <div className={styles.nutrition_values}>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {storeOpenedIngredient.calories}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {storeOpenedIngredient.proteins}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {storeOpenedIngredient.fat}
              </p>
            </div>
            <div className={styles.value_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive mt-2">
                {storeOpenedIngredient.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

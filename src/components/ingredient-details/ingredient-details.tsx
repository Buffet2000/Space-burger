import React, { useEffect } from "react";
import styles from "./ingredient-details.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { addIngredientInfo } from "../../services/actions/opened-ingredient";

export default function IngredientDetails() {
  const { id } = useParams();
  const allIngredients = useSelector((store) => store.ingredients.items);
  const openedIngredient = allIngredients.find(item => item._id === id);
  
  return (
    <>
      {openedIngredient &&
        <div>
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
      }
    </>
  );
}

import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../services/types/hooks";


export default function IngredientDetails() {
  const { id } = useParams();
  const allIngredients = useSelector((store) => store.ingredients.items);
  const openedIngredient = allIngredients!.find(item => item._id === id);
  
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
                    Calories, kcal
                  </p>
                  <p className="text text_type_digits-default text_color_inactive mt-2">
                    {openedIngredient.calories}
                  </p>
                </div>
                <div className={styles.value_item}>
                  <p className="text text_type_main-default text_color_inactive">
                    Protein, g
                  </p>
                  <p className="text text_type_digits-default text_color_inactive mt-2">
                    {openedIngredient.proteins}
                  </p>
                </div>
                <div className={styles.value_item}>
                  <p className="text text_type_main-default text_color_inactive">
                    Fat, g
                  </p>
                  <p className="text text_type_digits-default text_color_inactive mt-2">
                    {openedIngredient.fat}
                  </p>
                </div>
                <div className={styles.value_item}>
                  <p className="text text_type_main-default text_color_inactive">
                    Carbs, g
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

import { useEffect } from 'react';
import styles from "./ingredient-details-page.module.css";
import { useSelector } from "../../services/types/hooks";
import { useParams, useNavigate } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

export default function IngredientDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const openedIngredient = itemsLoaded!.find(item => item._id === id);

  useEffect(() => {
    if (itemsLoaded && !openedIngredient) {
      return (navigate('/'))
    }
  }, [itemsLoaded])

  return (
    <>
      {openedIngredient &&
      <div className={styles.container}>
        <h2 className="text text_type_main-large mt-3 mb-3">Детали ингредиента</h2>
        <IngredientDetails />
      </div>}
    </>
  );
}

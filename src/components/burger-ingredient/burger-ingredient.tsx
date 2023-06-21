import { useMemo } from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { DataType } from "../../utils/dataType";
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from "../../services/types/hooks";
import { addOpenedIngredientInfo } from "../../services/actions/opened-ingredient-info";
import { Link, useLocation } from "react-router-dom";

export default function BurgerIngredient({ data }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients);
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);

  function handleOpen() {
    dispatch(addOpenedIngredientInfo(data))
  }

  const count = useMemo(() => {
    const allIngredients = [...constructorIngredients, ...constructorBuns]
    return allIngredients.filter(item => item._id === data._id).length;
  }, [constructorIngredients, constructorBuns])

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });

  return (
    <> 
      <Link className={styles.linkContainer} to={`/ingredients/${data._id}`} state={{ background: location }}>
        <div onClick={handleOpen} ref={dragRef} className={styles.ingredients_card} >
          {count === 0 ? null : <Counter count={count} size="default" />}
          <img className={styles.ingImage} src={data.image} alt={data.name} />
          <div className={styles.ingredients_price}>
            <p className="text text_type_digits-default">{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className="text text_type_main-default">{data.name}</p>
        </div>
      </Link>
    </>
  );
}

BurgerIngredient.propTypes = {
  data: DataType.isRequired,
};
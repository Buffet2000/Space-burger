import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredient.module.css";
import { DataType } from "../../utils/dataType";
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from "react-redux";
import { addIngredientInfo, deleteIngredientInfo } from "../../services/actions/opened-ingredient";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BurgerIngredient({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  
  const [modalActive, setModalActive] = React.useState(null);

  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients);
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);


  function handleClose() {
    setModalActive(false);
    //dispatch(deleteIngredientInfo())
  }

  function handleOpen() {
    //e.preventDefault();
    //e.stopPropagation();
    dispatch(addIngredientInfo(data))
    //setModalActive(true);
  
  }

  const count = React.useMemo(() => {
    const allIngredients = [...constructorIngredients, ...constructorBuns]
    return allIngredients.filter(item => item._id === data._id).length;
  }, [constructorIngredients, constructorBuns])

  //const count = 0;

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
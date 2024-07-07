import { useState, useMemo, useEffect } from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerBun from "../burger-elements/burger-element_bun";
import BurgerStuffing from "../burger-elements/burger-element_stuffing";
import OrderDetails from "../order-details/order-details"
import Modal from "../modal/modal";
import styles from "./burger-сonstructor.module.css";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { deleteOrder, postOrderInfo, saveOrderitems } from "../../services/actions/order";
import { addIngredientInConstructor, addBunsInConstructor, deleteAllIngredients } from "../../services/actions/constructor-ingredients";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Ingredient } from "../../services/types/types";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((store) => store.user);
  const [modalActive, setModalActive] = useState(false);

  const ingredients = useSelector((store) => store.constructorIngredients.ingredients);
  const buns = useSelector((store) => store.constructorIngredients.buns);
  const order = [...ingredients, ...buns];
  
  const orderIds = order.map(item => item._id);
  const [buttonValue, setButtonValue] = useState(true)

  useEffect(() => {
    if (buns.length === 0 || ingredients.length === 0) {
      setButtonValue(true)
    } if (ingredients.length > 0 && buns.length > 0) {
      setButtonValue(false)
    }
  }, [buns, ingredients])

  const totalPrice = useMemo(
    () => {
      let total = 0;
      ingredients.map((item: Ingredient) => { total = total + item.price });
      buns.map((item: Ingredient) => { total = total + item.price });
      return total;
    },
    [ingredients, buns]
  );
  
  function confirmOrder() {
    if (!isAuthenticated) {
      return (navigate('/login'))
    }
    if (isAuthenticated) {
      dispatch(saveOrderitems(orderIds));
      dispatch(postOrderInfo(orderIds));
      setModalActive(true);
    }
  }
  

  function closeOrder() {
    dispatch(deleteOrder());
    dispatch(deleteAllIngredients());
    setModalActive(false)
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: Ingredient) {
      if (item.type === "bun") {
        dispatch(addBunsInConstructor([item, item]));
      } else {
        dispatch(addIngredientInConstructor({ ...item, id: uuidv4() }));
      }
    },
  });

  return (
    <section ref={dropTarget} className={`${styles.constructor}`}>
      <div className={styles.constructor_list}>
        <BurgerBun className="mr-4" hideIco={styles.dragIcon_hidden} isLocked={true} containerType={"top"} nameType={"(верх)"} />
        <ul className={styles.stuffing_list}>
          {ingredients.length === 0
            ? <div className={`${styles.stuffing_addIngredient} text text_type_main-medium`}>Add ingredients</div>
            : ingredients.map((item, index) => {
              return <BurgerStuffing data={item} key={item.id} id={item.id!} index={index} />
            })
          }
        </ul>
        <BurgerBun hideIco={styles.dragIcon_hidden} isLocked={true} containerType={"bottom"} nameType={"(низ)"} />
      </div>
      <div className={styles.constructor_total}>
        <div className={styles.total_price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button disabled={buttonValue} htmlType="button" type="primary" size="large" onClick={confirmOrder}>
          Confirm order
        </Button>
        {modalActive && <Modal handleClose={closeOrder}>
          <OrderDetails />
        </Modal>}
      </div>
    </section>
  );
}
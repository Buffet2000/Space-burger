import React, {useMemo} from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerBun from "../burger-elements/burger-element_bun";
import BurgerStuffing from "../burger-elements/burger-element_stuffing";
import OrderDetails from "../order-details/order-details"
import Modal from "../modal/modal";
import styles from "./burger-constructor.module.css";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deleteOrder, postOrderInfo } from "../../services/actions/order";
import { addIngredientInConstructor, addBunsInConstructor, deleteAllIngredients } from "../../services/actions/constructor-ingredients";
import { v4 as uuidv4 } from "uuid";

export default function BurgerConstructor() {
  const [modalActive, setModalActive] = React.useState(false);

  const ingredients = useSelector((store) => store.constructorIngredients.ingredients); //Ингредиенты конструктора
  const buns = useSelector((store) => store.constructorIngredients.buns);
  //const orderIsLoaded = useSelector((store) => store.orderInformation.isLoaded);
  const dispatch = useDispatch();
  const ingredientsId = ingredients.map(item => item._id); //Все id заказа.
  
  const [buttonValue, setButtonValue] = React.useState(true)
  React.useEffect(() => {
    if (buns.length === 0 || ingredients.length === 0) {
      setButtonValue(true)
    } if (ingredients.length > 0) {
      setButtonValue(false)
    }
  }, [buns, ingredients])

  const totalPrice = useMemo(
    () => {
      let total = 0;
      buns.length === 0 ?
      total = 2510 :
      total = 0;
      ingredients.map((item) => { total = total + item.price });
      buns.map((item) => { total = total + item.price });
      return total;
    },
    [ingredients, buns]
  );

  function setOrderData() {
    const orderArray = [...ingredients, ...buns]
    dispatch(addOrder(orderArray));
    dispatch(postOrderInfo(orderArray));
  }

  function confirmOrder() {
    setOrderData();
    setModalActive(true);
  }

  function closeOrder() {
    dispatch(deleteOrder());
    dispatch(deleteAllIngredients());
    setModalActive(false)
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === 'bun') {
        dispatch(addBunsInConstructor([item, item]));
      } else {
        dispatch(addIngredientInConstructor({ ...item, id: uuidv4() }));
      }
    },
  });

  return (
    <section ref={dropTarget} className={styles.constructor}>
      <div className={styles.constructor_list}>
        <BurgerBun className="mr-4" hideIco={styles.dragIcon_hidden} isLocked={true} containerType={"top"} nameType={"(верх)"} />
        <ul className={styles.stuffing_list}>
          
          {ingredients.length === 0
            ? <div className={`${styles.stuffing_addIngredient} text text_type_main-medium`}>Добавь ингредиеты</div>
            : ingredients.map((item, index) => {
              return <BurgerStuffing data={item} key={item.id} index={index} />
            })
          }
        </ul>
        <BurgerBun hideIco={styles.dragIcon_hidden} isLocked={true} type={"bottom"} nameType={"(низ)"} />
      </div>
      <div className={styles.constructor_total}>
        <div className={styles.total_price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button disabled={buttonValue} htmlType="button" type="primary" size="large" onClick={() => confirmOrder(ingredientsId)}>
          Оформить заказ
        </Button>
        {modalActive && <Modal handleClose={closeOrder}>
          <OrderDetails />
        </Modal>}
      </div>
    </section>
  );
}
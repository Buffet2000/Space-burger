import React, {useMemo} from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerBun from "../burger-elements/burger-element_bun";
import BurgerStuffing from "../burger-elements/burger-element_stuffing";
import OrderDetails from "../order-details/order-details"
import Modal from "../modal/modal";
import styles from "./burger-constructor.module.css";
import { IngredientContext } from "../../services/ingredient-context";
import { postOrder } from "../api/api";
import { useDrop } from "react-dnd";

export default function BurgerConstructor() {
  const [modalActive, setModalActive] = React.useState(false);
  const [order, setOrder] = React.useState({ number: '0', data: [] });

  const data = React.useContext(IngredientContext);

  const stuffing = useMemo(() => { return (data.filter(item => item.type !== 'bun')) }, [data])
  const bun = useMemo(() => { return (data.find(item => item.type === 'bun')) }, [data]) //Только булочка.
  const ingredients = useMemo(() => { return ([...stuffing, bun, bun]) }, [stuffing, bun]); //Ингредиенты заказа.

  const ingredientsId = ingredients.map(item => item._id); //Все id заказа.
  
  const totalPrice = useMemo(
    () => {
      let total = 0;
      ingredients.map((item) => total = total + item.price);
      return total;
    },
    [ingredients]
  );

  function setOrderData() {
    postOrder(ingredientsId)
    .then(data => (setOrder({ ...order, number: data.order.number }), console.log(order.number)))
  }

  function confirmOrder() {
    setOrderData();
    setModalActive(true);
  }

  return (
    <section className={styles.constructor}>
      <div className={styles.constructor_list}>
        <BurgerBun className="mr-4" hideIco={styles.dragIcon_hidden} isLocked={true} containerType={"top"} data={bun} nameType={"(верх)"} />
        <ul className={styles.stuffing_list}>
          {stuffing.map((item) => {
            return <BurgerStuffing data={item} key={item._id} />
          })}
        </ul>
        <BurgerBun hideIco={styles.dragIcon_hidden} isLocked={true} type={"bottom"} data={bun} nameType={"(низ)"} />
      </div>
      <div className={styles.constructor_total}>
        <div className={styles.total_price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => confirmOrder(ingredientsId)}>
          Оформить заказ
        </Button>
        {modalActive && <Modal handleClose={() => setModalActive(false)}>
          <OrderDetails orderNumber={order.number}/>
        </Modal>}
      </div>
    </section>
  );
}
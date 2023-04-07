import React, {useMemo} from "react";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerBun from "../burger-elements/burger-element_bun";
import BurgerStuffing from "../burger-elements/burger-element_stuffing";
import OrderDetails from "../order-details/order-details"
import Modal from "../modal/modal";
import styles from "./burger-constructor.module.css";
import { IngredientContext } from "../../services/ingredient-context";

export default function BurgerConstructor() {
  const [modalActive, setModalActive] = React.useState(false);
  const data = React.useContext(IngredientContext);
  //const ingredients = data.find((ingr) => ingr._id === id);
  const stuffing = useMemo(() => { return (data.filter(item => item.type !== 'bun')) }, [data])
  const bun = useMemo(() => { return (data.find(item => item.type === 'bun')) }, [data])
  const ingredients = useMemo(() => { return ([...stuffing, bun, bun]) }, [stuffing, bun]);
  
  const totalPrice = useMemo(
    () => {
      let total = 0;
      ingredients.map((item) => total = total + item.price);
      return total;
    },
    [ingredients]
  );
  console.log(totalPrice)
  return (
    <section className={styles.constructor}>
      <div className={styles.constructor_list}>
        <BurgerBun className="mr-4" hideIco={styles.dragIcon_hidden} isLocked={true} type={"top"} data={bun} />
        <ul className={styles.stuffing_list}>
          {stuffing.map((item) => {
            return <BurgerStuffing data={item} key={item._id} />
          })}
        </ul>
        <BurgerBun hideIco={styles.dragIcon_hidden} isLocked={true} type={"bottom"} data={bun} />
      </div>
      <div className={styles.constructor_total}>
        <div className={styles.total_price}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => setModalActive(true)}>
          Оформить заказ
        </Button>
        {modalActive && <Modal handleClose={() => setModalActive(false)}>
          <OrderDetails/>
        </Modal>}
      </div>
    </section>
  );
}
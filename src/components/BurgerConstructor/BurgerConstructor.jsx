import React from "react";
import {
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { data } from "../../utils/data";

export default function BurgerConstructor() {
  const Element = ({ data, id, type, isLocked, hideIco }) => {
    const ingredient = data.find((ingr) => ingr._id === id);
    return (
      <div className={styles.ingredient_container}>
         <div className={hideIco}>
           <DragIcon type="primary" />
         </div>
         <ConstructorElement
           type={type}
           isLocked={isLocked}
           text={ingredient.name}
           price={ingredient.price}
           thumbnail={ingredient.image}
         />
      </div>
    )};
  return (
    <div className={styles.constructor}>
      <div className={styles.constructor_list}>
        <Element className="mr-4" hideIco={styles.ingredient_dragIcon} isLocked={true} type={"top"} data={data} id={"60666c42cc7b410027a1a9b1"} />
        <Element data={data} id={"60666c42cc7b410027a1a9b9"} />
        <Element data={data} id={"60666c42cc7b410027a1a9b4"} />
        <Element data={data} id={"60666c42cc7b410027a1a9bc"} />
        <Element data={data} id={"60666c42cc7b410027a1a9bb"} />
        <Element data={data} id={"60666c42cc7b410027a1a9bb"} />
        <Element hideIco={styles.ingredient_dragIcon} isLocked={true} type={"bottom"} data={data} id={"60666c42cc7b410027a1a9b1"} />
      </div>
      <div className={styles.constructor_total}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass="ml-10">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

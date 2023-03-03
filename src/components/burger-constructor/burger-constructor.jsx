import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerElement from "../burger-element/burger-element"
import styles from "./burger-constructor.module.css";

export default function BurgerConstructor({ data }) {
  return (
    <div className={styles.constructor}>
      <div className={styles.constructor_list}>
        <BurgerElement className="mr-4" hideIco={styles.ingredient_dragIcon} isLocked={true} type={"top"} data={data} id={
"60d3b41abdacab0026a733c6"} />
        <BurgerElement data={data} id={'60d3b41abdacab0026a733ce'} />
        <BurgerElement data={data} id={'60d3b41abdacab0026a733c9'} />
        <BurgerElement data={data} id={'60d3b41abdacab0026a733d1'} />
        <BurgerElement data={data} id={'60d3b41abdacab0026a733d0'} />
        <BurgerElement data={data} id={'60d3b41abdacab0026a733d0'} />
        <BurgerElement hideIco={styles.ingredient_dragIcon} isLocked={true} type={"bottom"} data={data} id={
"60d3b41abdacab0026a733c6"} />
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
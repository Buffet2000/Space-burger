import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerElement from "../burger-element/burger-element"
import styles from "./burger-constructor.module.css";
import { data } from "../../utils/data";

export default function BurgerConstructor() {
  return (
    <div className={styles.constructor}>
      <div className={styles.constructor_list}>
        <BurgerElement className="mr-4" hideIco={styles.ingredient_dragIcon} isLocked={true} type={"top"} data={data} id={"60666c42cc7b410027a1a9b1"} />
        <BurgerElement data={data} id={"60666c42cc7b410027a1a9b9"} />
        <BurgerElement data={data} id={"60666c42cc7b410027a1a9b4"} />
        <BurgerElement data={data} id={"60666c42cc7b410027a1a9bc"} />
        <BurgerElement data={data} id={"60666c42cc7b410027a1a9bb"} />
        <BurgerElement data={data} id={"60666c42cc7b410027a1a9bb"} />
        <BurgerElement hideIco={styles.ingredient_dragIcon} isLocked={true} type={"bottom"} data={data} id={"60666c42cc7b410027a1a9b1"} />
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
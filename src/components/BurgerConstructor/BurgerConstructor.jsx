import React from "react";
import {
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { data } from "../../utils/data.js";

export default function BurgerConstructor() {
  const Element = ({ data }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
        <DragIcon type="primary" /><ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
        />
        <ConstructorElement
          text="Мясо бессмертных моллюсков Protostomia"
          price={300}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
        />
        <ConstructorElement
          text="Плоды Фалленианского дерева"
          price={80}
          thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
        />
        <ConstructorElement
          text="Хрустящие минеральные кольца"
          price={80}
          thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
        />
        <ConstructorElement
          text="Хрустящие минеральные кольца"
          price={80}
          thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={20}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
      </div>
    );
  };
  return (
    <div className={styles.constructor}>
      <div className={styles.constructor_list}>
        <Element data={data} />
      </div>
      <div className={styles.constructor_total}>
      <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon type="primary" />
        <Button htmlType="button" type="primary" size="large" extraClass="ml-8">Оформить заказ</Button>
      </div>
    </div>
  );
}

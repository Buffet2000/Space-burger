import React from "react";
import {
  Tab,
  Counter,
  CurrencyIcon,
  ConstructorElement,
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
          price={data.price}
          thumbnail={data.image}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={data.price}
          thumbnail={data.image}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={data.price}
          thumbnail={data.image}
        />
      </div>
    );
  };
  return (
    <div className={styles.constructor}>
      {data
        .filter((ing) => ing.type == "sauce")
        .map((data, type) => (
          <Element key={type} data={data} />
        ))}
    </div>
  );
}

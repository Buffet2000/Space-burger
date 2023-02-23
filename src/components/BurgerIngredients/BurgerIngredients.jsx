import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  BurgerIn,
  Tab,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsStyles from "./BurgerIngredients.module.css";
import { data } from "../../utils/data.js";

export default function BurgerIngredients() {
  const Tabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    );
  };

  /*const Ingreients = () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
				<ConstructorElement
					type="top"
					isLocked={true}
					text="Краторная булка N-200i (верх)"
					price={200}
					//thumbnail={img}
				/>
				<ConstructorElement
					text="Краторная булка N-200i (верх)"
					price={50}
					//thumbnail={img}
				/>
				<ConstructorElement
					type="bottom"
					isLocked={true}
					text="Краторная булка N-200i (низ)"
					price={200}
					//thumbnail={img}
				/>
			</div>
		)
		}*/
  return (
    <section className={IngredientsStyles.ingredients}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs />
      <div className="burgerBun"></div>
      <div className="sauces"></div>
      <div className="stuffing"></div>
    </section>
  );
}

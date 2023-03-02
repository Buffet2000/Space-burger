import React from "react";
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";

export default function BurgerIngredient ({ data }) {
	return (
		<div className={styles.ingredients_card}>
			<Counter count={9} size="default" />
			<img className={styles.ingImage} src={data.image} alt={data.name} />
			<div className={styles.ingredients_price}>
				<p className="text text_type_digits-default">{data.price}</p>
				<CurrencyIcon type="primary" />
			</div>
			<p className="text text_type_main-default">{data.name}</p>
		</div>
	);
};

BurgerIngredient.propTypes = {
  data: PropTypes.object
};
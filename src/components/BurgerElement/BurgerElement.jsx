import React from "react";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerElement.module.css";

export default function BurgerElement ({ data, id, type, isLocked, hideIco }) {
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

	BurgerElement.propTypes = {
		data: PropTypes.array,
		id: PropTypes.string,
		type: PropTypes.string,
		isLocked: PropTypes.bool,
		hideIco: PropTypes.string //здесь я не понимаю, что за тип данных, если по факту это стиль. Сам по себе это объект, 
		                           //но данные в пропс получается просто текст. И я прям сломался, как писать по итогу. Или PropTypes.symbol или PropTypes.string :)
	}; 
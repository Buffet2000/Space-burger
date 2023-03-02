import React from "react";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-element.module.css";

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
		data: PropTypes.array.isRequired,
		id: PropTypes.string.isRequired,
		type: PropTypes.string,
		isLocked: PropTypes.bool,
		hideIco: PropTypes.string
	}; 
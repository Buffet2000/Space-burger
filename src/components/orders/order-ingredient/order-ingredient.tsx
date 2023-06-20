import { useSelector } from '../../../services/types/hooks';
import { FC } from 'react';
import styles from './order-ingredient.module.css'

export const OrderIngredient: FC = ({ intersection, id, counter }) => {

	const allIngredients = useSelector((store) => store.ingredients.items);
	const ingredientData = allIngredients.filter(item => item._id === id)[0]


	let className;
	switch (intersection) {
		case true:
			className = styles.intersection
			break;
		case false:
			className = null
			break;
		default:
			break;
	}

	return (
		<div className={`${styles.frame} ${className}`}>
			<img className={`${styles.img} `} src={ingredientData ? ingredientData.image : null} ></img>
			{counter >= 2
				? (<div className={`${styles.counter} text text_type_main-default`}>+{counter}</div>)
				: null
			}
		</div>
	);
}
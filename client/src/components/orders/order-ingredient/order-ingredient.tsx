import { useSelector } from '../../../services/types/hooks';
import styles from './order-ingredient.module.css';

type OrderIngredientProps = {
  intersection: boolean,
  id: string,
  counter?: number | undefined,
}

export default function OrderIngredient({ intersection, id, counter }: OrderIngredientProps) {

	const allIngredients = useSelector((store) => store.ingredients.items);
	const ingredientData = allIngredients!.filter(item => item._id === id)[0]


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
			<img alt='ingredient' className={`${styles.img}`} src={ingredientData ? ingredientData.image : undefined} ></img>
			{counter! >= 2
				? (<div className={`${styles.counter} text text_type_main-default`}>+{counter}</div>)
				: null
			}
		</div>
	);
}
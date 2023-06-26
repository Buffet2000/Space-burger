import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css';

type TotalPrice = {
	totalPrice: number | undefined,
	size: string
}

export default function TotalPrice({ totalPrice, size }: TotalPrice) {

	return (
		<div className={styles.total}>
			<p className={`${size}`}>
				{totalPrice}
			</p>
			<CurrencyIcon type="primary" />
		</div>
	);
}
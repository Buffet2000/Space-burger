import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css';

type TotalPriceProps = {
	totalPrice: number | undefined,
	size: string
}

export default function TotalPrice({ totalPrice, size }: TotalPriceProps) {

	return (
		<div className={styles.total}>
			<p className={`${size}`}>
				{totalPrice}
			</p>
			<CurrencyIcon type="primary" />
		</div>
	);
}
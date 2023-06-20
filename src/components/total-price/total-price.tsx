import { FC } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css'

export const TotalPrice: FC = ({ totalPrice, size }) => {

	return (
		<div className={styles.total}>
			<p className={`${size}`}>
				{totalPrice}
			</p>
			<CurrencyIcon />
		</div>
	);
}
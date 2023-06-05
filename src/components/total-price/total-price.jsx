import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css'

export default function TotalPrice({ totalPrice, size }) {

	return (
		<div className={styles.total}>
			<p className={`${size}`}>
				{totalPrice}
			</p>
			<CurrencyIcon />
		</div>
	);
}

TotalPrice.propTypes = {
	totalPrice: PropTypes.number.isRequired
}
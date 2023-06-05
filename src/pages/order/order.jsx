import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderInfo from '../../components/order-info/order-info';
import PropTypes from 'prop-types';

export default function Order({ start, close, data }) {
	const dispatch = useDispatch();

	useEffect(() => {
		if (data === null) {
			dispatch({ type: start });
			return () => dispatch({ type: close });
		}
	}, []);

	return (
		<>
			{data
				? <OrderInfo data={data} ></OrderInfo>
				: <p>Загрузка данных...</p>}
		</>
	);
}

Order.propTypes = {
	type: PropTypes.string
}
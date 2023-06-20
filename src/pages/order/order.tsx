import { useEffect, FC } from 'react';
import { useDispatch } from '../../services/types/hooks';
import { OrderInfo } from '../../components/order-info/order-info';
import PropTypes from 'prop-types';

export const Order: FC = ({ start, close, data, modal }) => {
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
				? <OrderInfo data={data} modal={modal} ></OrderInfo>
				: <p>Загрузка данных...</p>}
		</>
	);
}

Order.propTypes = {
	type: PropTypes.string
}
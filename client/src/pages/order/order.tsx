import { useEffect } from 'react';
import { useDispatch } from '../../services/types/hooks';
import OrderInfo from '../../components/order-info/order-info';
import { Order as OrderFS } from '../../services/types/types';


type OrderFullScreen = {
	start: string,
	close: string,
	data: OrderFS[] | null,
	modal?: boolean,
}

export default function Order({ start, close, data, modal }: OrderFullScreen) {
	const dispatch = useDispatch();

	useEffect(() => {
		if (data === null) {
			dispatch({ type: start });
		}
		return () => {dispatch({ type: close })};
	});

	return (
		<>
			{data
				? <OrderInfo data={data} modal={modal} />
				: <p>Loading...</p>}
		</>
	);
}
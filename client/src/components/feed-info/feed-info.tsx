import { Order } from '../../services/types/types';
import styles from './feed-info.module.css';

type FeedInfoProps = {
	name: string,
	arr: Order[],
	done?: boolean,
	statusString: "done" | "pending",
}

export default function FeedInfo({ name, arr, done, statusString }: FeedInfoProps) {

	const ordersReady = arr.filter(item => item.status === statusString)

	return (
		<div className={`${styles.infoContainer}`}>
			<h3 className='text text_type_main-medium mb-6'>{name}:</h3>
			<ul className={`${styles.infoList}`}>
				{ordersReady.slice(0, 10).map(item =>
					done
						? <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`} key={item.number}>{item.number}</li>
						: <li className={`${styles.listElement} text text_type_digits-default`} key={item.number}>{item.number}</li>
				)}
			</ul>
		</div>
	);
}
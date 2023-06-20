import { FC } from 'react';
import styles from './feed-info.module.css';
import PropTypes from 'prop-types';

export const FeedInfo: FC = ({ name, arr, done, statusString }) => {

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

FeedInfo.propTypes = {
	name: PropTypes.string,
	arr: PropTypes.array,
	done: PropTypes.bool,
	statusString: PropTypes.string,
}
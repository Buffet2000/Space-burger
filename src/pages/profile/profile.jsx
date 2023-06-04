import React, { useState, useSelector } from 'react';
import styles from './profile.module.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/actions/login';
import { useDispatch } from 'react-redux';

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [current, setCurrent] = useState('profile');

	const logOut = () => {
		setCurrent('logOut');
		dispatch(logoutUser(() => navigate('/login')));
	}

	return (
		<>
			<div className={styles.profileContent}>
				<div className={styles.profileNavigation}>
					<Link to='/profile' name='profile' className={styles.profileLink} onClick={() => setCurrent('profile')}>
						<p className={current === 'profile' ? 'text text_type_main-medium' : 'text text_type_main-medium text_color_inactive'}>Профиль</p>
					</Link>
					<Link to='/profile/orders' name='orderHistory' className={styles.profileLink} onClick={() => setCurrent('orderHistory')}>
						<p className={current === 'orderHistory' ? 'text text_type_main-medium' : 'text text_type_main-medium text_color_inactive'}>История заказов</p>
					</Link>
					<Link name='logOut' className={styles.profileLink} onClick={logOut}>
						<p className={current === 'logOut' ? 'text text_type_main-medium' : 'text text_type_main-medium text_color_inactive'}>Выход</p>
					</Link>
					<div className={styles.help}>
						<p className='text text_type_main-default text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</p>
					</div>
				</div>
				<Outlet className="mt-30" />
			</div>
		</>
	)
}
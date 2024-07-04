import { useState, useEffect } from 'react';
import styles from './profile.module.css';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/actions/login';
import { useDispatch } from '../../services/types/hooks';

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [current, setCurrent] = useState('');

	const logOut = () => {
		dispatch(logoutUser(() => navigate('/login')));
	}

	useEffect(() => {
		if (location.pathname === '/profile') {
			setCurrent('profile');
		}
		if (location.pathname === '/profile/orders') {
			setCurrent("orderHistory");
		}
	}, [location]);

	return (
		<>
			<div className={styles.profileContent}>
				<div className={styles.profileNavigation}>
					<NavLink to="/profile" end className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`}>Профиль</NavLink>
					<NavLink to="/profile/orders" className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`}>История заказов</NavLink>
					<NavLink to="/login" className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`} onClick={logOut}>Выход</NavLink>
					<div className={styles.help}>
						<p className='text text_type_main-default'>В этом разделе вы можете изменить свои персональные данные</p>
					</div>
				</div>
				<Outlet />
			</div>
		</>
	)
}
/*
	<NavLink end to="/profile" className={({isActive}) => isActive ? `${styles.link} ${styles.active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}>Профиль</NavLink>
	<NavLink to="/profile/orders" className={({isActive}) => isActive ? `${styles.link} ${styles.active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`}>История заказов</NavLink>
	<NavLink to="/login" className={`${styles.link} text text_type_main-medium`} onClick={logOut}>Выход</NavLink>
*/
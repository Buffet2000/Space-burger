import { useState, useEffect, FC } from 'react';
import styles from './profile.module.css';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/actions/login';
import { useDispatch } from '../../services/types/hooks';

export const Profile: FC = () => {
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
					<Link to={{ pathname: "/profile" }} name='profile' className={styles.profileLink} >
						<p className={current === 'profile' ? 'text text_type_main-medium' : 'text text_type_main-medium text_color_inactive'}>Профиль</p>
					</Link>
					<Link to={{ pathname: "/profile/orders" }} name='orderHistory' className={styles.profileLink} >
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
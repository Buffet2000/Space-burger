import styles from './profile.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/actions/login';
import { useDispatch } from '../../services/types/hooks';

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOut = () => {
		dispatch(logoutUser(() => navigate('/login')));
	}

	return (
		<>
			<div className={styles.profileContent}>
				<div className={styles.profileNavigation}>
					<NavLink to="/profile" end className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`}>Account</NavLink>
					<NavLink to="/profile/orders" className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`}>Order history</NavLink>
					<NavLink to="/login" className={({ isActive }) => isActive ? `${styles.profileLink_active} text text_type_main-medium` : `${styles.profileLink} text text_type_main-medium`} onClick={logOut}>Logout</NavLink>
					<div className={styles.help}>
						<p className='text text_type_main-default'>In this section you can change your personal data</p>
					</div>
				</div>
				<Outlet />
			</div>
		</>
	)
}

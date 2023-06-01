import React from 'react';
import AppHeader from '../components/app-header/app-header';
import styles from './profile.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser, updateUserData } from '../services/actions/login';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  const location = useLocation();

	const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

	const [disabled, setDisabled] = React.useState(true);
  const inputRef = React.useRef(null)
	const { email, name } = useSelector((store) => store.user.user);

  const [user, setUser] = React.useState(
    {
			name: name,
      email: email,
      password: "",
    })

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
		setDisabled(false);
	}
	const [password, setPassword] = React.useState('password')

	const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
		console.log(email)
  }

	const [current, setCurrent] = React.useState('profile');

	const submitChanges = (e) => {
    e.preventDefault();
    dispatch(updateUserData(user))
  }

	const logOut = () => {
    setCurrent('logOut');
    dispatch(logoutUser(() => navigate('/login')));
		console.log(isAuthenticated)
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
				<div className={styles.inputContainer}>
					<Input
						type={'text'}
						placeholder={'Имя'}
						onChange={onChange}
						icon={'EditIcon'}
						value={name}
						name={'name'}
						error={false}
						ref={inputRef}
						onIconClick={onIconClick}
						errorText={'Ошибка'}
						size={'default'}
						extraClass="ml-1"
						disabled={disabled}
					/>
					<EmailInput
						onChange={onChange}
						value={email}
						name={'email'}
						placeholder="Логин"
						isIcon={true}
						extraClass="mb-2"
					/>
					<PasswordInput
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						name={'password'}
						icon="EditIcon"
					/>
				</div>
			</div>
		</>
	)
}
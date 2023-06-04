import React, { useState } from 'react';
//import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { userLogin } from '../../services/actions/login';
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
	const dispatch = useDispatch();
	const userData = useSelector((store) => store.user);

	const [user, setUser] = useState(
		{
			email: "",
			password: "",
		});

	const onChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	const inputRef = React.useRef(null)
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
		alert('Icon Click Callback')
	}

	const loginUser = (e) => {
		e.preventDefault();
		dispatch(userLogin(user));
		console.log(userData.accessToken ? "user login success" : "user login failed")
	}

	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Вход</h2>
				<form className={styles.form} onSubmit={loginUser}>
					<EmailInput
						onChange={onChange}
						value={user.email}
						name={'email'}
						placeholder="E-mail"
						extraClass="mb-2"
					/>
					<PasswordInput
						onChange={onChange}
						value={user.password}
						name={'password'}
						extraClass='mb-2'
					/>
					{userData.loginRequestFailed && (
						<p className={`${styles.error} text text_type_main-default mb-2`}>
							Неверный логин или пароль
						</p>
					)}
					<Button htmlType="submit" type="primary" size="medium">
						Войти
					</Button>
				</form>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link className={styles.link} to='/register'>Зарегистрироваться</Link></p>
					<p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link className={styles.link} to='/forgot-password'>Восстановить пароль</Link></p>
				</div>
			</div>
		</>
	)
}
import React from 'react';
//import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { userLogin } from '../services/actions/login';
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
	const dispatch = useDispatch();
	const userData = useSelector((store) => store.user.user);

	const [login, setLogin] = React.useState('')
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
	}
	const [password, setPassword] = React.useState('')
  const onChange = e => {
    setPassword(e.target.value)
  }

	function loginUser() {
		dispatch(userLogin(login, password));
		console.log(userData.accessToken ? "user login success" : "user login failed")
	}
	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Вход</h2>
				<EmailInput
					onChange={e => setLogin(e.target.value)}
					value={login}
					name={'Логин'}
					placeholder="E-mail"
					extraClass="mb-2"
				/>
				<PasswordInput
					onChange={onChange}
					value={password}
					name={''}
				/>
				<Button htmlType="button" type="primary" size="medium" onClick={loginUser}>
          Войти
        </Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link to='/register'>Зарегистрироваться</Link></p>
					<p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link to='/forgot-password'>Восстановить пароль</Link></p>
				</div>
			</div>
		</>
	)
}
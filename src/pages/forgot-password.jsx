import React from 'react';
import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {

	const [login, setLogin] = React.useState('')

	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Восстановление пароля</h2>
				<EmailInput
					onChange={e => setLogin(e.target.value)}
					value={login}
					name={'Логин'}
					placeholder="Укажите e-mail"
					extraClass="mb-2"
				/>
				<Button htmlType="button" type="primary" size="medium" onClick={null}>Восстановить</Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to='/login'>Войти</Link></p>
				</div>
			</div>
		</>
	)
}
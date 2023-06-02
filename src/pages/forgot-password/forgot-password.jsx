import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './forgot-password.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
	const navigate = useNavigate();
	const [login, setLogin] = React.useState('')

	const resetPassword = (e) => {
    e.preventDefault();
    navigate('/reset-password');
  }

	return (
		<>
			<form onSubmit={resetPassword} className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Восстановление пароля</h2>
				<EmailInput
					onChange={e => setLogin(e.target.value)}
					value={login}
					name={'Логин'}
					placeholder="Укажите e-mail"
					extraClass="mb-2"
				/>
				<Button htmlType="submit" type="primary" size="medium" >Восстановить</Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link></p>
				</div>
			</form>
		</>
	)
}
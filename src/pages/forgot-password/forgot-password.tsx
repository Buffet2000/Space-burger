import React from 'react';
import styles from './forgot-password.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { sentVerificationEmail } from '../../services/actions/password-reset';
import { useDispatch } from '../../services/types/hooks';
import { useForm } from '../../services/types/hooks';

export default function ForgotPassword() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { values, handleChange } = useForm({ email: "" });

	const resetPassword = (e) => {
		e.preventDefault();
		dispatch(sentVerificationEmail(values.email, () => navigate('/reset-password')));
	}

	return (
		<>
			<form onSubmit={resetPassword} className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Восстановление пароля</h2>
				<EmailInput
					onChange={handleChange}
					value={values.email}
					name={'email'}
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
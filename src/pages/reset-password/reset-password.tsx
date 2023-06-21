import { useRef, FC } from 'react';
import styles from './reset-password.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, useForm } from '../../services/types/hooks';
import { resetPassword } from '../../services/actions/reset-password';

export default function ResetPassword() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const { verificationSent } = useSelector((store) => store.resetPassword);

	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
	}

	const { values, handleChange } = useForm({ newPassword: "", token: "" })
	
	const resetPass = e => {
		e.preventDefault();
		dispatch(resetPassword(values.newPassword, values.token));
		navigate('/login');
	}

	if (!verificationSent) {
    navigate('/forgot-password')
  }

	return (
		<form onSubmit={resetPass} className={styles.inputContainer}>
			<h2 className="text text_type_main-medium">Восстановление пароля</h2>
			<PasswordInput
				onChange={handleChange}
				value={values.newPassword}
				name={'newPassword'}
				placeholder={'Введите новый пароль'}
				icon="ShowIcon"
			/>
			<Input
				type={'text'}
				placeholder={'Введите код из письма'}
				onChange={handleChange}
				value={values.token}
				name={'token'}
				error={false}
				ref={inputRef}
				onIconClick={onIconClick}
				errorText={'Ошибка'}
				size={'default'}
				extraClass="ml-1"
			/>
			<Button htmlType="submit" type="primary" size="medium" >Сохранить</Button>
			<div className={styles.registration}>
				<p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to='/login' className={styles.link} >Войти</Link></p>
			</div>
		</form>
	)
}
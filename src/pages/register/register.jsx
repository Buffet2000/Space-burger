import React, { useState } from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../components/api/api';
import { useSelector } from 'react-redux';
import { useForm } from '../../services/types/hooks';

export default function Register() {
	const { isAuthenticated } = useSelector((store) => store.user);
	const navigate = useNavigate();

	const inputRef = React.useRef(null)
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0)
	}

	const { values, handleChange } = useForm({ email: "", password: "", name: "" })

	/*const [user, setUser] = useState(
		{
			email: "",
			password: "",
			name: ""
		})

	const onChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	}*/

	const submitNewUser = () => {
		registerNewUser(values.email, values.password, values.name)
	}

	return (
		<>
			<form onSubmit={submitNewUser} className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={handleChange}
					value={values.name}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
					extraClass="ml-1"
				/>
				<EmailInput
					onChange={handleChange}
					value={values.email}
					name={'email'}
					placeholder="E-mail"
					extraClass="mb-2"
				/>
				<PasswordInput
					onChange={handleChange}
					value={values.password}
					name={'password'}
				/>
				<Button htmlType="submit" type="primary" size="medium" >
					Зарегистрироваться
				</Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link className={styles.link} to='/login'>Войти</Link></p>
				</div>
			</form>
		</>
	)
}
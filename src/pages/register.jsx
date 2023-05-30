import React, { useState } from 'react';
import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { registerNewUser } from '../components/api/api';

export default function Register() {

  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)

	}

	const [user, setUser] = useState(
    {
      email: "",
      password: "",
      name: ""
    })

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={onChange}
					value={user.name}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
					extraClass="ml-1"
				/>
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
				/>
				<Button htmlType="button" type="primary" size="medium" onClick={() => registerNewUser(user.email, user.password, user.name)}>
          Зарегистрироваться
        </Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
				</div>
			</div>
		</>
	)
}
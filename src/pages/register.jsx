import React from 'react';
import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export default function Register() {

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

	const [current, setCurrent] = React.useState("profile");

	const [value, setValue] = React.useState('')

	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Регистрация</h2>
				<Input
					type={'text'}
					placeholder={'Имя'}
					onChange={e => setValue(e.target.value)}
					value={value}
					name={'name'}
					error={false}
					ref={inputRef}
					onIconClick={onIconClick}
					errorText={'Ошибка'}
					size={'default'}
					extraClass="ml-1"
				/>
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
				<Button htmlType="button" type="primary" size="medium" onClick={null}>
          Зарегистрироваться
        </Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link>Войти</Link></p>
				</div>
			</div>
		</>
	)
}
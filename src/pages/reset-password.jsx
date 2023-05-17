import React from 'react';
import AppHeader from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
	
  const inputRef = React.useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
	}

	const [password, setPassword] = React.useState('');

  const onChange = e => {
    setPassword(e.target.value)
  }

	const [value, setValue] = React.useState('');


	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Восстановление пароля</h2>
				<PasswordInput
					onChange={onChange}
					value={password}
					name={''}
					placeholder={'Введите новый пароль'}
				/>
				<Input
					type={'text'}
					placeholder={'Введите код из письма'}
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
				<Button htmlType="button" type="primary" size="medium" onClick={null}>Сохранить</Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link>Войти</Link></p>
				</div>
			</div>
		</>
	)
}
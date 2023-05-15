import React from 'react';
import Header from '../components/app-header/app-header';
import styles from './login.module.css';
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export default function Login() {

	const [name, setName] = React.useState('Марк')
	const [login, setLogin] = React.useState('mail@stellar.burgers')
	const [disabled, setDisabled] = React.useState(true);
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
		setDisabled(false);
    alert('Icon Click Callback')
	}
	const [password, setPassword] = React.useState('password')
  const onChange = e => {
    setPassword(e.target.value)
  }

	return (
		<>
			<Header/>
			<div className={styles.profileContent}>
				<div className={styles.profileNavigation}>
					<Link className={styles.profileLink}>
						<p className='text text_type_main-medium'>Профиль</p>
					</Link>
					<Link className={styles.profileLink}>
						<p className='text text_type_main-medium'>История заказов</p>
						</Link>
					<Link className={styles.profileLink}>
						<p className='text text_type_main-medium'>Выход</p>
					</Link>
					<div className={styles.help}>
						<p className='text text_type_main-default text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</p>
					</div>
				</div>
				<div className={styles.inputContainer}>
					<Input
						type={'text'}
						placeholder={'имя'}
						onChange={e => setName(e.target.value)}
						icon={'EditIcon'}
						value={name}
						name={'Имя'}
						error={false}
						ref={inputRef}
						onIconClick={onIconClick}
						errorText={'Ошибка'}
						size={'default'}
						extraClass="ml-1"
						disabled={disabled}
					/>
					<EmailInput
						onChange={e => setLogin(e.target.value)}
						value={login}
						name={'Логин'}
						placeholder="Логин"
						isIcon={true}
						extraClass="mb-2"
					/>
					<PasswordInput
						onChange={onChange}
						value={password}
						name={'password'}
						icon="EditIcon"
					/>
				</div>
			</div>
		</>
	)
}
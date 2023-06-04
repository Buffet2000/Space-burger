import React, { useRef, useState } from 'react';
import styles from './profile-info.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, updateUserData } from '../../services/actions/login';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileInfo() {
	const dispatch = useDispatch();

	const [disabled, setDisabled] = useState(true);
	const inputRef = useRef(null)
	const { email, name } = useSelector((store) => store.user.user);

	const [user, setUser] = useState(
		{
			name: name,
			email: email,
			password: "",
		})

	const [active, setActive] = useState(false)

	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0);
		setDisabled(false);
	}


	const onChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
		setActive(true)
	}

	const submitChanges = (e) => {
		e.preventDefault();
		dispatch(updateUserData(user))
	}

	const canсelChanges = (e) => {
		setUser({
			email: email,
			password: "",
			name: name
		})
		setActive(false)
	}

	return (
		<form onSubmit={submitChanges} className={styles.inputContainer}>
			<Input
				type={'text'}
				placeholder={'Имя'}
				onChange={onChange}
				icon='EditIcon'
				value={name}
				name={'name'}
				error={false}
				ref={inputRef}
				onIconClick={onIconClick}
				errorText={'Ошибка'}
				size={'default'}
				extraClass="ml-1"
				disabled={disabled}
			/>
			<EmailInput
				onChange={onChange}
				value={email}
				name={'email'}
				placeholder="Логин"
				isIcon={true}
				extraClass="mb-2"
			/>
			<PasswordInput
				onChange={onChange}
				value={user.password}
				name={'password'}
				placeholder="Изменить пароль"
				icon="EditIcon"
			/>
			<div className={styles.buttons}>
				{active && <Button htmlType="button" type="secondary" size="medium" extraClass="ml-2" onClick={canсelChanges}>Отмена</Button>}
				{active && <Button htmlType="submit" type="primary" size="medium" extraClass="ml-2">Сохранить</Button>}
			</div>
		</form>
	);
}
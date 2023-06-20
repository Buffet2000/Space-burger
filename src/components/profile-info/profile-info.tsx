import { useRef, useState, FC } from 'react';
import styles from './profile-info.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserData } from '../../services/actions/login';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { useForm } from '../../services/types/hooks';

export const ProfileInfo: FC = () => {
	const dispatch = useDispatch();

	const [disabled, setDisabled] = useState(true);
	const inputRef = useRef(null)
	const { email, name } = useSelector((store) => store.user.user);

	const {values, handleChange, setValues} = useForm({ name: name, email: email, password: "" });
	const [active, setActive] = useState(false)

	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0);
		setDisabled(false);
	}

	const submitChanges = (e) => {
		e.preventDefault();
		dispatch(updateUserData(values))
	}

	const canсelChanges = (e) => {
		setValues({
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
				onChange={handleChange}
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
				onChange={handleChange}
				value={email}
				name={'email'}
				placeholder="Логин"
				isIcon={true}
				extraClass="mb-2"
			/>
			<PasswordInput
				onChange={handleChange}
				value={values.password}
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
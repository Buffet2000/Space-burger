import { useState } from 'react';
import styles from './profile-info.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserData } from '../../services/actions/login';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { useForm } from '../../services/types/hooks';

export default function ProfileInfo() {
	const dispatch = useDispatch();
	const { email, name } = useSelector((store) => store.user.user);

	const { values, handleChange, setValues } = useForm({ name: name, email: email, password: "" });
	const [active, setActive] = useState(false)
	const [disabledName, setDisabledName] = useState(true);
	const [disabledPassword, setDisabledPassword] = useState(true);
	const [disabledEmail, setDisabledEmail] = useState(true);

	const submitChanges = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(updateUserData(values))
		setActive(false);
	}

	const setFocus = (inputID: string) => {
		document.getElementById(inputID)?.focus();
	}

	const canсelChanges = () => {
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
				id='name'
				type={'text'}
				placeholder={'Name'}
				onChange={handleChange}
				icon={'EditIcon'}
				value={values.name}
				name={'name'}
				error={false}
				errorText={'Error with name'}
				size={'default'}
				extraClass="ml-1"
				disabled={disabledName}
				onIconClick={() => {
					setDisabledName(false)
					setFocus('name')
				}}
				onFocus={() => {setActive(true)}}
				onBlur={() => setDisabledName(true)}
			/>
			<Input
				id='email'
				type={'email'}
				onChange={handleChange}
				value={values.email}
				name={'email'}
				placeholder="Login"
				icon={'EditIcon'}
				extraClass="mb-2"
				disabled={disabledEmail}
				error={false}
				errorText={'Error with email'}
				onIconClick={() => {
					setDisabledEmail(false)
					setFocus('email')
				}}
				onFocus={() => {setActive(true)}}
				onBlur={() => setDisabledEmail(true)}
			/>
			<Input
				id='password'
				type={'password'}
				onChange={handleChange}
				value={values.password}
				name={'password'}
				placeholder={"Change password"}
				icon={"EditIcon"}
				disabled={disabledPassword}
				error={false}
				errorText={'Error with password'}
				onIconClick={() => {
					setFocus('password')
					setDisabledPassword(false)
				}}
				onFocus={() => {setActive(true)}}
				onBlur={() => setDisabledPassword(true)}
			/>
			<div className={styles.buttons}>
				{active && <Button htmlType="button" type="secondary" size="medium" extraClass="ml-2" onClick={canсelChanges}>Cancel</Button>}
				{active && <Button htmlType="submit" type="primary" size="medium" extraClass="ml-2">Save</Button>}
			</div>
		</form>
	);
}
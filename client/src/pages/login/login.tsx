import styles from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { userLogin } from '../../services/actions/login';
import { useSelector, useDispatch } from "../../services/types/hooks";
import { useForm } from '../../services/types/hooks';

export default function Login() {
	const dispatch = useDispatch();
	const userData = useSelector((store) => store.user);

	const {values, handleChange} = useForm({email: "", password: ""});

	const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(userLogin(values));
	}

	return (
		<>
			<div className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Вход</h2>
				<form className={styles.form} onSubmit={loginUser}>
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
						extraClass='mb-2'
					/>
					{userData.loginRequestFailed && (
						<p className={`${styles.error} text text_type_main-default mb-2`}>
							Неверный логин или пароль
						</p>
					)}
					<Button htmlType="submit" type="primary" size="medium">
						Войти
					</Button>
				</form>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link className={styles.link} to='/register'>Зарегистрироваться</Link></p>
					<p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link className={styles.link} to='/forgot-password'>Восстановить пароль</Link></p>
				</div>
			</div>
		</>
	)
}
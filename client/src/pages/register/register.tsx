import styles from './register.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { registerNewUser } from '../../components/api/api';
import { useForm } from '../../services/types/hooks';

export default function Register() {
	const { values, handleChange } = useForm({ email: "", password: "", name: "" })

	const submitNewUser = () => {
		registerNewUser(values.email, values.password, values.name)
	}

	return (
		<>
			<form onSubmit={submitNewUser} className={styles.inputContainer}>
				<h2 className="text text_type_main-medium">Registration</h2>
				<Input
					type={'text'}
					placeholder={'Name'}
					onChange={handleChange}
					value={values.name}
					name={'name'}
					error={false}
					errorText={'Error'}
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
					placeholder='Password'
					name={'password'}
				/>
				<Button htmlType="submit" type="primary" size="medium" >
					Register
				</Button>
				<div className={styles.registration}>
					<p className="text text_type_main-default text_color_inactive">Already registered? <Link className={styles.link} to='/login'>Login</Link></p>
				</div>
			</form>
		</>
	)
}
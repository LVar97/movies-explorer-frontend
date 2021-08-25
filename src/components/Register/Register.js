import React, {useState} from 'react';
import FormScreen from "../FormScreen/FormScreen";
import '../FormScreen/FormScreen.css';

function Register({
	label,
	isScreenAccess,
	onRegister,
	...props}){


	const [name, setName] = useState('');
	function handleChangeName(e){
    setName(e.target.value)
  }

	return(
		<FormScreen
		title='Добро пожаловать!'
		buttonName='Зарегистрироваться'
		link='signin'
		caption='Уже зарегистрированы?'
		linkName='Войти'
		isScreenAccess={isScreenAccess}
		name={name}
		onChange={props.onChange}
		handleSubmit={onRegister}>
			<label className='form__label'>{label}</label>
			<input
			className='form__input'
			type='text'
			required
			maxLength="30"
			minLength="2"
			value={name}
			onChange={handleChangeName}
			/>
			<span className='form__error-message'>Что-то пошло не так...</span>
		</FormScreen>
	);
}

export default Register;
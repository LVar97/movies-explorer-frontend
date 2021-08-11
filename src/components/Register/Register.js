import FormScreen from "../FormScreen/FormScreen";
import '../FormScreen/FormScreen.css';

function Register(props){
	return(
		<FormScreen
		title='Добро пожаловать!'
		buttonName='Зарегистрироваться'
		link='signin'
		caption='Уже зарегистрированы?'
		linkName='Войти'
		isScreenAccess={props.isScreenAccess}>
			<label className='form__label'>{props.name}</label>
			<input className='form__input' type='text'/>
			<span className='form__error-message'>Что-то пошло не так...</span>
		</FormScreen>
	);
}

export default Register;
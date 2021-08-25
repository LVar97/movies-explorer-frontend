import FormScreen from "../FormScreen/FormScreen";

function Login({isScreenAccess, onLogin, ...props}){
	
	return(
		<FormScreen
		title='Рады видеть!'
		buttonName='Войти'
		link='signup'
		caption='Ещё не зарегистрированы?'
		linkName='Регистрация'
		isScreenLogin={true}
		isScreenAccess={isScreenAccess}
		handleSubmit={onLogin}
		/>
	);
}

Login.defaultProps = {
  isScreenLogin: false
}

export default Login;

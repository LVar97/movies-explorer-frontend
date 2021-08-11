import FormScreen from "../FormScreen/FormScreen";

function Login(props){
	return(
		<FormScreen
		title='Рады видеть!'
		buttonName='Войти'
		link='signup'
		caption='Ещё не зарегистрированы?'
		linkName='Регистрация'
		isLogin={props.isScreenLogin}
		isScreenAccess={props.isScreenAccess}
		/>
	);
}

export default Login;

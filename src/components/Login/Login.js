import React, { useEffect } from 'react';
import FormScreen from "../FormScreen/FormScreen";
import { useHistory } from 'react-router';

function Login({isScreenAccess, onLogin, isLoading, isLogged, errorText, clearErrors}){

	const history = useHistory();

  useEffect(() => {
    if (isLogged) history.push('/movies');
  }, [history, isLogged]);


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
		isLoading={isLoading}

    errorText={errorText}
    clearErrors={clearErrors}
		/>
	);
}

Login.defaultProps = {
  isScreenLogin: false
}

export default Login;

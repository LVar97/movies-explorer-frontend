import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import FormScreen from "../FormScreen/FormScreen";
import '../FormScreen/FormScreen.css';


function Register({
	isScreenAccess,
	onRegister,
	isLogged,
	isLoading,
	errorText,
  clearErrors}){

    const history = useHistory();

    useEffect(() => {
      if (isLogged) {
        history.push('/movies');
      }
    }, [history, isLogged]);

	return(
		<FormScreen
		title='Добро пожаловать!'
		buttonName='Зарегистрироваться'
		link='signin'
		caption='Уже зарегистрированы?'
		linkName='Войти'
		isScreenAccess={isScreenAccess}
		handleSubmit={onRegister}
		isLoading={isLoading}

		errorText={errorText}
    clearErrors={clearErrors}>
		</FormScreen>
	);
}

export default Register;
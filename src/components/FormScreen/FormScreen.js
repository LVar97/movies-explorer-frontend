import React, {useState} from 'react';
import './FormScreen.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function FormScreen({name, isScreenLogin, isScreenAccess, ...props}) {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e)  {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleSubmit({name,email,password})
  }

  return (
    <section className='form'>
        <Header isScreenAccess={true}/>
				<form
        className='form__container'
        onSubmit={handleSubmit}
        noValidate>
        <h1 className='form__title'>{props.title}</h1>
        <div className='form__inputs'>
					{props.children}
          <label className='form__label'>E-mail</label>
          <input
          className='form__input'
          type='text'
          required
          maxLength="30"
          minLength="5"
          value={email}
          onChange={handleChangeEmail}/>
          <span className='form__error-message'>Что-то пошло не так...</span>
          <label className='form__label'>Пароль</label>
          <input
          className='form__input'
          type='password'
          required
          maxLength="30"
          minLength="8"
          value={password}
          onChange={handleChangePassword}/>
          <span className='form__error-message'>Что-то пошло не так...</span>
        </div>
        <button className={`form__access-button ${isScreenLogin && 'form__access-button_login'}`} type='submit'>{props.buttonName}</button>
        <p className='form__caption'>{props.caption}
					<Link 
					className='form__link'
					to={props.link}>{props.linkName}
					</Link>
				</p>
      </form>
    </section>
  );
}

FormScreen.defaultProps = {
  isScreenAccess: false
}
export default FormScreen;

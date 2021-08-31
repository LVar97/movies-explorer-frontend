import React from 'react';
import { Link } from 'react-router-dom';
import './FormScreen.css';
import Header from '../Header/Header';

import useFormWithValidation from '../../utils/useFormValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function FormScreen({
  isScreenLogin, isScreenAccess, errorText,
  clearErrors, ...props
}) {

  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleSubmit(values);
  }

  React.useEffect(() => clearErrors(), []);

  return (
    <section className='form'>
        <Header isScreenAccess={true}/>
        <form
        className='form__container'
        onSubmit={handleSubmit}
        noValidate>
        <h1 className='form__title'>{props.title}</h1>
        <div className={`form__inputs ${isScreenLogin && 'form__inputs_login'}`}>
          {!isScreenLogin && (
            <>
              <label className='form__label'>Имя</label>
              <input
              name='name'
              className='form__input'
              type='text'
              required
              maxLength="30"
              minLength="2"
              value={values.name || ''}
              onChange={handleChange}
              />
              <span className='form__error-message'>{errors.name}</span>
            </>
          )}
          <label className='form__label'>E-mail</label>
          <input
          name='email'
          className='form__input'
          type='email'
          required
          maxLength="30"
          minLength="5"
          value={values.email || ''}
          onChange={handleChange}
          />
          <span className='form__error-message'>{errors.email}</span>
          <label className='form__label'>Пароль</label>
          <input
          name='password'
          className='form__input'
          type='password'
          required
          maxLength="30"
          minLength="8"
          value={values.password || ''}
          onChange={handleChange}
          />
          <span className='form__error-message'>{errors.password}</span>
        </div>
        <ErrorMessage errorText={errorText} className='message-error_auth-form'/>
        <button
        className={`form__access-button ${isValid && 'form__access-button_active'}`}
        type='submit'
        disabled={!isValid}
        >{props.buttonName}</button>
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
  isScreenAccess: false,
};

export default FormScreen;

import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormWithValidation from '../../utils/useFormValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

function Profile({
  isLogged, isMobile, handleBurgerClick, onEditProfile, onSignOut, isLoading, serverMessage,
  clearErrors,
}) {

  const {
    values, handleChange, errors, isValid, setValues,
  } = useFormWithValidation();

  const { name, email } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name,
      email,
    });

    clearErrors();
  }, [name, email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditProfile(values);
  };

  return (
    <section className="profile">
      <Header>
      {isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
        <div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
      </Header>
      <h1 className="profile__hello-title hello-title">Привет, {name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <label className="profile__label">Имя
          <input
          type="text"
          name='name'
          className="profile__input profile__input_name"
          required
          maxLength="30"
          minLength="2"
          value={values.name || ''}
          onChange={handleChange}
          />
        </label>
        <span className='form__error-message'>{errors.name}</span>
        <label className="profile__label">E-mail
          <input
          type="email"
          name='email'
          className="profile__input profile__input_email"
          required
          maxLength="30"
          minLength="5"
          value={values.email || ''}
          onChange={handleChange}
          />
        </label>
        <span className={`form__error-message form__error-message_profile ${isLoading && 'form__error-message_loading'}`}>{errors.email}</span>
        <ErrorMessage errorText={serverMessage} className='message-error_profile '/>
        <button
        type="submit"
        className={`profile__btn profile__btn_submit ${isValid && 'profile__btn_submit_active'}`}
        disabled={
          (values.name === name && values.email === email) || !isValid
        }
        >{isLoading ? 'Oбновляем...': 'Редактировать'}</button>
      </form>
      <button type="button" className="profile__btn profile__btn_exit" onClick={onSignOut}>Выйти из аккаунта</button>
    </section>
  );
}

Profile.defaultProps = {
  isLoading: false,
};

export default Profile;

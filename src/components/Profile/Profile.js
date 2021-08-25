import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import {CurrentUserContext} from '../../context/CurrentUserContext';

function Profile({isLogged, isMobile, handleBurgerClick, onEditProfile, onSignOut, isLoading}){

	const [ name, setName] = useState('');
	const [email, setEmail] = useState('');
	const userData = useContext(CurrentUserContext);

	function handleChangeName(e) {
    setName(e.target.value);
  }
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
  };

	useEffect(() => {
    setName(userData.name);
		setEmail(userData.email);
  }, [userData]);

	const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditProfile({name, email});
  };

	return(
		<section className="profile">
			<Header>
			{isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
				<div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
			</Header>
			<h1 className="profile__hello-title hello-title">Привет, Варвара!</h1>
			<form className="profile__form"  onSubmit={handleSubmit} noValidate>
				<label className="profile__label">Имя
					<input
					type="text"
					className="profile__input profile__input_name"
					required
					maxLength="30"
					minLength="2"
					value={name || ''}
					onChange={handleChangeName}
					/>
				</label>
				<label className="profile__label">E-mail
					<input
					type="text"
					className="profile__input profile__input_email"
					required
					maxLength="30"
					minLength="5"
					value={email || ''}
					onChange={handleChangeEmail}
					/>
				</label>
				<button
				type="submit"
				className="profile__btn profile__btn_submit"
				>Редактировать</button>
			</form>
			<button type="button" className="profile__btn profile__btn_exit" onClick={onSignOut}>Выйти из аккаунта</button>
		</section>
	);
}

Profile.defaultProps = {
  isLoading: false,
};

export default Profile;

import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

function Profile({isLogged, isMobile, handleBurgerClick}){
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
			<form className="profile__form">
				<label className="profile__label">Имя
					<input type="text" className="profile__input profile__input_name" required maxLength="30" minLength="2"/>
				</label>
				<label className="profile__label">E-mail
					<input type="text" className="profile__input profile__input_email" required maxLength="30" minLength="5"/>
				</label>
				<button type="submit" className="profile__btn profile__btn_submit">Редактировать</button>
			</form>
			<button type="button" className="profile__btn profile__btn_exit">Выйти из аккаунта</button>
		</section>
	);
}

export default Profile;

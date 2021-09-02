import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';
import	Promo from './Promo/Promo';
// import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Main({isLogged, isMobile, handleBurgerClick, ...props}){
	return(
		<>
			<Header>
			{isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
				<div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
			</Header>
			<main className="content">
				<Promo />
				<AboutProject />
				<Techs />
				<AboutMe />
				<Portfolio />
			</main>
			<Footer />
		</>
	);
}

export default Main;
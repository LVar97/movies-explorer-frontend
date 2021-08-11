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


function Main({isLogged, ...props}){
	return(
		<>
			<Header isLogged={isLogged}>
        <nav className={`menu ${props.isLogged && 'menu__full'}`}>
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>
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
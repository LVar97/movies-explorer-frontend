import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function Movies({isLogged, isMobile, handleBurgerClick}){
	console.log(isLogged)
	return(
		<>
			<Header>
			{isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
				<div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
			</Header>
			<div className="movies">
				<SearchForm />
				<Preloader />
				<MoviesCardList name="Сохранить"/>
			</div>
			<Footer />
		</>
	);
}

export default Movies;

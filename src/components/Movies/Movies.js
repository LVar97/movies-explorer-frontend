import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

function Movies({isLogged}){
	return(
		<>
			<Header>
			{isLogged ? <Navigation /> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
			</Header>
			<div className="movies">
				<SearchForm />
				<MoviesCardList name="Сохранить"/>
			</div>
			<Footer />
		</>
	);
}

export default Movies;

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

function SavedMovies({isLogged, isMobile, handleBurgerClick}){
	return(
		<section className="save-movies">
			<Header>
			{isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
				<div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
			</Header>
			<SearchForm/>
			<MoviesCardList
			isSavedMovies={true}
			name="&#215;"/>
			<Footer/>
		</section>
	);
}

SavedMovies.defaultProps = {
  isSavedMovies: false
}

export default SavedMovies;

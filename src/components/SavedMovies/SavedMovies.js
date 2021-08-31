import React from 'react';
import './SavedMovies.css';
import { NavLink } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function SavedMovies({
  isLogged,
  isMobile,
  handleBurgerClick,
  onMovieDelete,
  onSearch,

  chosenMovies,
}) {

  React.useEffect(() => {
    setFilteredSavedMovies(chosenMovies);
  }, [chosenMovies]);

  const [shortFilm, setShortFilm] = React.useState(false);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  
  const filter = (film) => {
    setFilteredSavedMovies(onSearch(film, chosenMovies))
  };

  function onFilterShort(filterOn) {
    setShortFilm(filterOn);
  }

  function filterDuration(film) {
    return film.duration < 40;
  }

  function filterShortFilm(movie) {
    return movie.filter((item) => filterDuration(item));
  }

  return (
  <section className="save-movies">
    <Header>
    {isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
      <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
      <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
    </nav>)}
    <div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
    </Header>
    <SearchForm
    onSearch={filter}
    onFilterShort={onFilterShort}
    isCheked={shortFilm}/>
    <MoviesCardList
    name="&#215;"
    onMovieDelete={onMovieDelete}
    savedMovies={shortFilm ? filterShortFilm(filteredSavedMovies) : filteredSavedMovies}
    renderAllMovies={shortFilm ? filterShortFilm(filteredSavedMovies) : filteredSavedMovies}
    isSavedMoviesPage={true}/>
    <Footer/>
  </section>
  );
}

SavedMovies.defaultProps = {
  isSavedMoviesPage: false,
};

export default SavedMovies;

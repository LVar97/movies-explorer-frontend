import './Movies.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Movies({
  isLogged,
  isMobile,
  handleBurgerClick,
  onSearch,
  onMovieSave,
  onMovieDelete,

  movies,
  chosenMovies,

  isLoading,
  errorText,
  isFindMovies,
}) {

  const [filteredMovies,setFilteredMovies] = React.useState([]);
  const [shortFilm,setShortFilm] = React.useState(false);
console.log(chosenMovies)

  React.useEffect(() => {
    filter();
    checkFavourite(movies, chosenMovies)
  }, [movies]);

  const filter = (keyword) => {
    if(keyword === undefined
    && localStorage.getItem('savedquery') === null
    && localStorage.getItem('savedquery') === ''){
      return []
    }else {
      console.log(checkFavourite(movies, chosenMovies));
      return setFilteredMovies(onSearch(localStorage.getItem('savedquery'), movies))
    }
  }


  function checkFavourite(array1, array2){
    console.log(array1, array2)
    array1.forEach((el) => {
      array2.forEach((film) => {
        if(el.movieId === film.movieId){
          console.log(el)
          return el.isFavorite = true;
        }
      })
    })
  }

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
    <>
      <Header>
      {isLogged ? <Navigation isMobile={isMobile}/> : (<nav className="menu" >
          <NavLink className='menu__button menu__button_register' to='/signup'>Регистрация</NavLink>
          <NavLink className='menu__button menu__button_login menu__button_active' to='/signin'>Войти</NavLink>
        </nav>)}
        <div className={`menu__burger ${isMobile && isLogged ? 'menu__burger_active' : ''}`} onClick={handleBurgerClick}></div>
      </Header>
      <div className="movies">
        <SearchForm
          onSearch={filter}
          onFilterShort={onFilterShort}
          isCheked={shortFilm} />
        <ErrorMessage errorText={errorText} className='message-error_movies'/>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
          name='Сохранить'

          onMovieSave={onMovieSave}
          onMovieDelete={onMovieDelete}
          renderAllMovies={shortFilm ? filterShortFilm(filteredMovies) : filteredMovies}
          savedMovies={chosenMovies}
          isFindMovies={isFindMovies}
          isSavedMoviesPage={false}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

Movies.defaultProps = {
  isSavedMoviesPage: false,
};

export default Movies;



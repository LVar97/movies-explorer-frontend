import React from 'react';
import './MoviesCard.css';

function MoviesCard({
  name,
  movie, // 1 фильм
  onMovieDelete,
  onMovieSave,
  savedMovies,
  isSavedMoviesPage,
}) {

  const {
    trailer, image, nameRU, duration, isFavorite,
  } = movie;

  function handleClick() {
    movie.isFavorite= true
    onMovieSave(movie);
  }

  function handleDeleteClick() {
    let DeleteMovie = {};
    savedMovies.forEach((film)=>{
      if(film.movieId === movie.movieId){
        DeleteMovie = film
      }
    })
    DeleteMovie.isFavorite = false
    onMovieDelete(DeleteMovie);
  }

  function renderCardActionButton() {

    if (isSavedMoviesPage) {
      return (
        <button
          className='movies-card__btn-save'
          onClick={handleDeleteClick}
          type='button'>
          {name}
        </button>
      );
    }

    if (isFavorite) {
      return (
        <button
          className='movies-card__btn-save movies-card__btn-save_active'
          type="button"
          onClick={handleDeleteClick}
        ></button>
      );
    }

    return (
      <button
        className='movies-card__btn-save'
        type="button"
        onClick={handleClick}
      >Сохранить</button>
    );
  }
  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">{nameRU}</h3>
        <p className="movies-card__duration">{duration} минут</p>
      </div>
      <a href={trailer}>
      <img className="movies-card__cover" src={image} alt={nameRU}/>
      </a>
      {renderCardActionButton()}
    </li>
  );
}

export default MoviesCard;

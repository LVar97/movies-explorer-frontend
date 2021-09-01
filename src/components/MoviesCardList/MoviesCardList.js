import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function MoviesCardList({
  onMovieSave,
  onMovieDelete,
  handleMoreCards,
  name,
  savedMovies, // из movie [chosenMovies]
  renderAllMovies,
  isSavedMoviesPage,
}) {

  const [extraPortion, setExtraPortion] = React.useState(3)
  const [currentCount, setCurrenCount] = React.useState(0)
  const [renderMovies, setRenderMovies] = React.useState([])

  function getCount(windowSize) {
    if (windowSize > 768) {
      return { first: 12, extra: 3 }
    } else if (windowSize > 480 && windowSize <= 768) {
      return { first: 8, extra: 2 }
    } else {
      return { first: 5, extra: 2 }
    }
  }

  function renderExtraPortion() {
    const count = Math.min(renderAllMovies.length, currentCount + extraPortion)
    const extraMovies = renderAllMovies.slice(currentCount, count)
    setRenderMovies([...renderMovies, ...extraMovies])
    console.log(renderMovies)
    setCurrenCount(count)
  }

  function handleResize() {
    const windowSize = window.innerWidth
    const sizePortion = getCount(windowSize)
    setExtraPortion(sizePortion.extra)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log()
  React.useEffect(() => {
    // console.log(renderAllMovies.length)
    if (renderAllMovies !== undefined && renderAllMovies.length > 0){
      const windowSize = window.innerWidth
      const sizePortion = getCount(windowSize)
      setExtraPortion(sizePortion.extra)
      const count = Math.min(renderAllMovies.length, sizePortion.first)
      setRenderMovies(renderAllMovies.slice(0, count))
      setCurrenCount(count)
    }

  }, [renderAllMovies])

  function handleMoreCards() {
    renderExtraPortion();
  }

  function renderMoreButton(){

    if(!isSavedMoviesPage && renderAllMovies === undefined){
      return (
        <button
        className='movies-list__btn-more_hidden'
        type='button'
        onClick={handleMoreCards}>Ещё</button>
      )
    }

    if(!isSavedMoviesPage && renderAllMovies.length === 0){
      return (
        <button
        className='movies-list__btn-more_hidden'
        type='button'
        onClick={handleMoreCards}>Ещё</button>
      )
    }

    if(!isSavedMoviesPage && renderMovies.length === renderAllMovies.length){
      return (
        <button
        className='movies-list__btn-more_hidden'
        type='button'
        onClick={handleMoreCards}>Ещё</button>
      )
    }

    if(!isSavedMoviesPage && renderMovies.length > 0){
      return (
        <button
        className='movies-list__btn-more'
        type='button'
        onClick={handleMoreCards}>Ещё</button>
      )
    }

    if(isSavedMoviesPage){
      return (
        <button
        className='movies-list__btn-more_hidden'
        type='button'
        onClick={handleMoreCards}
        />
      )
    }
  }

  function renderStart(){

    if(isSavedMoviesPage && renderMovies.length === 0){
      return(
        <>
         <ErrorMessage errorText='' className='message-help'/>
         <ErrorMessage errorText='Сохраненных фильмов пока нет' className='message-help'/>
       </>
      )
    }

    if(!isSavedMoviesPage && renderMovies.length === 0){
      return(
        <>
        <ErrorMessage errorText='' className='message-help'/>
        <ErrorMessage errorText='Фильмы не найдены' className='message-help'/>
        </>
      )
    }

    // if(!isSavedMoviesPage && renderAllMovies.length === 0 && renderAllMovies.length !== 0){
    //   console.log('условте работает')
    //   return(
    //     <>
    //     <ErrorMessage errorText='' className='message-help'/>
    //     <ErrorMessage errorText='Фильмы не найдены' className='message-help'/>
    //     </>
    //   )
    // }

    return(
      <>
      <ErrorMessage errorText='' className='message-help'/>
      <ErrorMessage errorText='Фильмы не найдены' className='message-help'/>
      </>
    )

  }

  return (
    <section className="movies-list">
      <ul className="movies-list__cards">
      {renderAllMovies !== undefined && renderAllMovies.length !== 0 ?
       (renderMovies.map((movie) => (
          <MoviesCard
          name={name}
          key={movie.movieId}
          onMovieDelete={onMovieDelete}
          onMovieSave={onMovieSave}
          movie={movie} //от map
          isSavedMoviesPage={isSavedMoviesPage}
          savedMovies={savedMovies}
          />))) : renderStart()}
      </ul>
      {/* {isSavedMoviesPage && renderStart()} */}
      {renderMoreButton()}
    </section>
  );
}

export default MoviesCardList;
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({...props}){
	return(
		<section className="movies-list">
			<ul className="movies-list__cards">
				<MoviesCard name={props.name}/>
			</ul>
			<button className={`movies-list__btn-more ${props.isSavedMovies && 'movies-list__btn-more_hidden'}`} type='button'>Ещё</button>
		</section>
	);
}

export default MoviesCardList;

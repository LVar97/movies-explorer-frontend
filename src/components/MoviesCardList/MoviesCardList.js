import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({...props}){
	return(
		<section className="movies-list">
			<ul className="movies-list__cards">
				<MoviesCard>
					<button className="movies-card__btn-save">{props.name}</button> 
				</MoviesCard>
				<MoviesCard>
					<button className="movies-card__btn-save movies-card__btn-save_active"></button> 
				</MoviesCard>
				<MoviesCard>
					<button className="movies-card__btn-save movies-card__btn-save_active"></button> 
				</MoviesCard>
			</ul>
			<button className={`movies-list__btn-more ${props.isSavedMovies && 'movies-list__btn-more_hidden'}`} type='button'>Ещё</button>
		</section>
	);
}

export default MoviesCardList;

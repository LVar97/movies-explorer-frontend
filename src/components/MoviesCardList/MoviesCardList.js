import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({...props}){
	return(
		<section className="movies-list">
			<ul className="movies-list__cards">
				{/* {props.children} */}
				<MoviesCard/>
			</ul>
			<button className='movies-list__btn-more' type='button'>Ещё</button>
		</section>
	);
}

export default MoviesCardList;

import './MoviesCard.css';
import card from '../../images/card.png';

function MoviesCard(props){
	return(
		<li className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">33 слова о дизайне</h3>
				<p className="movies-card__duration">27 минут</p>
      </div>
			<img className="movies-card__cover" src={card} alt="Обложка фильма"/>
			<button className="movies-card__btn-save">{props.name}</button>
    </li>
	);
}

export default MoviesCard;

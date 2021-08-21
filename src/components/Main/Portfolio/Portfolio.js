import './Portfolio.css';
import arrow from '../../../images/arrow-link.svg';

function Portfolio(){
	return(
		<section className="portfolio">
			<h3 className="portfolio__heading">Портфолио</h3>
			<div className="portfolio__sections">
				<a className="portfolio__link" href="https://lvar97.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
				<a className="portfolio__arrow-link" href="https://lvar97.github.io/how-to-learn/" target="_blank" rel="noreferrer">
					<img src={arrow} className="portfolio__arrow" alt="Стрелочка для перехода по ссылке" />
				</a>
				<a className="portfolio__link" href="https://lvar97.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
				<a className="portfolio__arrow-link" href="https://lvar97.github.io/russian-travel/" target="_blank" rel="noreferrer">
					<img  src={arrow} className="portfolio__arrow" alt="Стрелочка для перехода по ссылке" />
				</a>
				<a className="portfolio__link" href="https://mestokarelina.students.nomoredomains.monster" target="_blank" rel="noreferrer">Одностраничное приложение</a>
				<a className="portfolio__arrow-link" href="https://mestokarelina.students.nomoredomains.monster" target="_blank" rel="noreferrer">
					<img src={arrow} className="portfolio__arrow" alt="Стрелочка для перехода по ссылке" />
				</a>
			</div>
		</section>
	);
}

export default Portfolio;

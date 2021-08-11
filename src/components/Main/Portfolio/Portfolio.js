import './Portfolio.css';
import arrow from '../../../images/arrow-link.svg';

function Portfolio(){
	return(
		<section className="portfolio">
			<h3 className="portfolio__heading">Портфолио</h3>
			<div className="portfolio__sections">
				<a className="portfolio__link" href="https://lvar97.github.io/how-to-learn/">Статичный сайт</a>
				<a className="portfolio__arrow-link" href="https://lvar97.github.io/how-to-learn/">
					<img src={arrow} alt="Стрелочка для перехода по ссылке" />
				</a>
				<a className="portfolio__link" href="https://lvar97.github.io/russian-travel/">Адаптивный сайт</a>
				<a className="portfolio__arrow-link" href="https://lvar97.github.io/russian-travel/">
					<img  src={arrow} alt="Стрелочка для перехода по ссылке" />
				</a>
				<a className="portfolio__link" href="https://mestokarelina.students.nomoredomains.monster">Одностраничное приложение</a>
				<a className="portfolio__arrow-link" href="https://mestokarelina.students.nomoredomains.monster">
					<img src={arrow} alt="Стрелочка для перехода по ссылке" />
				</a>
			</div>
		</section>
	);
}

export default Portfolio;

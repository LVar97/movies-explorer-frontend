import './AboutMe.css';
import photo from '../../../images/photo2.png';

function AboutMe(){
	return(
		<section className="about-me" id="student">
			<h2 className="about-me__subtitle subtitle">Студент</h2>
			<div className="about-me__block block">
				<div className="about-me__blocks about-me__blocks_text">
				<h1 className="about-me__title title">Варвара</h1>
				<h3 className="about-me__subtitle about-me__subtitle_block">Фронтенд-разработчик, 24 года</h3>
				<p className="about-me__description description">Мне нравится быть причастной к чему-то прекрасному. Раньше я делала это с помощью продажи вина и проведения дегустаций. А год назад я решила попробовать себя в веб-разработке, и она меня полностью поглотила!</p>
				<a href="https://www.facebook.com/varvara.karelina/" className="about-me__link" target="_blank" rel="noreferrer">Facebook</a>
				<a href="https://github.com/LVar97" className="about-me__link" target="_blank" rel="noreferrer">Github</a>
				</div>
				<img className="about-me__blocks about-me__blocks_photo" alt="Аватар" src={photo} />
			</div>
		</section>
	);
}

export default AboutMe;

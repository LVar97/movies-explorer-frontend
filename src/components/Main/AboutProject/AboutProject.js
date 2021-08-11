import './AboutProject.css';

function AboutProject(){
	return(
		<section className="about-project" id="project">
			<h2 className="about-project__subtitle subtitle">О проекте</h2>
			<div className="about-project__block block">
				<div className="about-project__blocks">
					<h3 className="about-project__subtitle about-project__subtitle_block">Дипломный проект включал 5 этапов</h3>
					<p className="about-project__description description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</div>
				<div className="about-project__blocks">
					<h3 className="about-project__subtitle about-project__subtitle_block">На выполнение диплома ушло 5 недель</h3>
					<p className="about-project__description description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</div>
			</div>
			<div className="about-project__scale">
				<figure className="about-project__figure about-project__figure_backend">1 неделя</figure>
				<figure className="about-project__figure about-project__figure_frontent">4 недели</figure>
				<figcaption className="about-project__figcaption about-project__figcaption_backend">Back-end</figcaption>
				<figcaption className="about-project__figcaption about-project__figcaption_frontent">Front-end</figcaption>
			</div>
		</section>
	);
}

export default AboutProject;

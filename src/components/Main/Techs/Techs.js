import './Techs.css';

function Techs(){
	return(
		<section className="techs" id="techs">
			<h2 className="techs__subtitle subtitle">Технологии</h2>
			<div className="techs__block block">
				<h1 className="techs__title title">7 технологий</h1>
				<p className="techs__description description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<div className="techs__list">
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">HTML</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">CSS</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">JS</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">React</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">Git</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">Express.js</figcaption>
				</figure>
				<figure className="techs__figure">
					<figcaption className="techs__figcaption">mongoDB</figcaption>
				</figure>
			</div>
			</div>
		</section>
	);
}

export default Techs;

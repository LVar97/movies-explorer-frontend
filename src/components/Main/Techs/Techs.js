import './Techs.css';

function Techs(){
	return(
		<section className="techs" id="techs">
			<h2 className="techs__subtitle subtitle">Технологии</h2>
			<div className="techs__block block">
				<h1 className="techs__title title">7 технологий</h1>
				<p className="techs__description description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
				<ul className="techs__list">
					<li className='techs__list_item'>HTML</li>
					<li className='techs__list_item'>CSS</li>
					<li className='techs__list_item'>JS</li>
					<li className='techs__list_item'>React</li>
					<li className='techs__list_item'>Git</li>
					<li className='techs__list_item'>Express.js</li>
					<li className='techs__list_item'>mongoDB</li>
				</ul>
			</div>
		</section>
	);
}

export default Techs;

import './Footer.css';

function Footer(){
	return(
		<footer className="footer">
			<p className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__sections">
				<p className="footer__section footer__section_year">© 2020</p>
				<a href="https://praktikum.yandex.ru" className="footer__section footer__section_link">Яндекс.Практикум</a>
				<a href="https://github.com/LVar97" className="footer__section footer__section_link">Github</a>
				<a href="https://www.facebook.com/varvara.karelina/" className="footer__section footer__section_link">Facebook</a>
			</div>
		</footer>
	);
}

export default Footer;

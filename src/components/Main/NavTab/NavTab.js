import './NavTab.css';

function NavTab(){
	return(
		<div className="nav-tab">
			<div className="nav-tab__btn">
				<a href="#project" className="nav-tab__link">О проекте</a>
			</div>
			<div className="nav-tab__btn">
				<a href="#techs" className="nav-tab__link">Технологии</a>
			</div>
			<div className="nav-tab__btn">
				<a href="#student" className="nav-tab__link">Студент</a>
			</div>
		</div>
	);
}

export default NavTab;

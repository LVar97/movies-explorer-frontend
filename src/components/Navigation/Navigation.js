import './Navigation.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon-profile.svg'

function Navigation(){
	return(
		<nav className="navigation">
			<NavLink to='/movies' className="navigation__link">Фильмы</NavLink>
			<NavLink to='/saved-movies' className="navigation__link">Сохранённые фильмы</NavLink>
			<NavLink to='/profile' className="navigation__link">Аккаунт</NavLink>
			<NavLink to='/profile' className="navigation__link">
				<img className="navigation__image" src={icon} alt="Иконка аккаунта"/>
			</NavLink>
		</nav>
	);
}

export default Navigation;

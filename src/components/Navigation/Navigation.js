import './Navigation.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon-profile.svg'

function Navigation({isMobile, ...props}){

	return(
		<nav className={`navigation ${isMobile ? 'navigation_hidden' : ''}`}>
			{props.children}
			<NavLink className="navigation__link" activeClassName="navigation__link_active" to='/movies'>Фильмы</NavLink>
			<NavLink to='/saved-movies' className="navigation__link" activeClassName= "navigation__link_active">Сохранённые фильмы</NavLink>
			<div className="navigation__link_account">
			<NavLink to='/profile' className="navigation__link navigation__link-account" activeClassName="navigation__link_active">Аккаунт</NavLink>
			<NavLink  to='/profile' className="navigation__link navigation__link-image">
				<img className="navigation__image" src={icon} alt="Иконка аккаунта"/>
			</NavLink>
			</div>
		</nav>
	);
}

export default Navigation;

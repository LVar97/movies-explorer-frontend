import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({...props}){
	return(
		<header className={`header ${props.isScreenAccess && 'header__access'}`}>
			<Link className={`header__logo ${props.isScreenAccess && 'header__logo_access'}`} to='/'>
      	<img className='header__logo_image' src={logo} alt='Логотип проекта'/>
			</Link>
      {props.children}
		</header>
	);
}

export default Header;

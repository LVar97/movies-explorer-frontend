import './BurgerMenu.css';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

function BurgerMenu({isMobile, isOpened, onClose, ...props}) {
  return (
    <section className={`burger-menu ${isOpened ? "burger-menu_active" : ""}`}>
      <nav className="burger-menu__content">
        <button className="burger-menu__close" type="button" onClick={onClose}></button>
        <div className="burger-menu__nav">
          <Navigation>
            <NavLink className="navigation__link" activeClassName={`${isMobile ? "navigation__link_active" : ""}`} exact to='/'>Главная</NavLink>
          </Navigation>
        </div>
      </nav>
    </section>
  );
}

export default BurgerMenu;
import './FormScreen.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function FormScreen(props) {
  return (
    <section className='form'>
        <Header isScreenAccess={props.isScreenAccess}/>
				<form className='form__container'>
        <h1 className='form__title'>{props.title}</h1>
        <div className='form__inputs'>
					{props.children}
          <label className='form__label'>E-mail</label>
          <input className='form__input' type='text' required maxLength="30" minLength="5"/>
          <span className='form__error-message'>Что-то пошло не так...</span>
          <label className='form__label'>Пароль</label>
          <input className='form__input' type='password' required maxLength="30" minLength="8"/>
          <span className='form__error-message'>Что-то пошло не так...</span>
        </div>
        <button className={`form__access-button ${props.isLogin && 'form__access-button_login'}`} type='submit'>{props.buttonName}</button>
        <p className='form__caption'>{props.caption}
					<Link 
					className='form__link'
					to={props.link}>{props.linkName}
					</Link>
				</p>
      </form>
    </section>
  );
}

export default FormScreen;

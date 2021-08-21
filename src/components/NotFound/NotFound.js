import './NotFound.css';

function NotFound(){
	return(
		<section className="error">
      <div className="error__content">
        <h1 className="error__status">404</h1>
        <p className="error__text">Страница не найдена</p>
      </div>
      <a className="error__link" href=" #">Назад</a>
    </section>
	);
}

export default NotFound;
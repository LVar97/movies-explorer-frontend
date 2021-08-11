import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(){
	return(
		<section className="search-form">
			<form className='search-form__container'>
        <input className='search-form__input' type='text' placeholder='Фильм' />
        <button className='search-form__button' type='button' />
      </form>
      <FilterCheckbox />
			<div className="search-form__line"/>
		</section>
	);
}

export default SearchForm;

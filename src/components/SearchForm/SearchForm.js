import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ERROR_MESSAGE } from '../../utils/constants';

function SearchForm({
  onSearch, onFilterShort, isCheked,
}) {
  const [film, setFilm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  function handleChangeFilm(e) {
    setFilm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!film) {
      setIsSearchEmpty(true);
    } else {
      localStorage.setItem('savedquery', film)
      setIsSearchEmpty(false);
      onSearch(film);
    }
  }

  return (
    <section className="search-form">
      <form className='search-form__container' onSubmit={handleSubmit} noValidate>
        <input
        className='search-form__input'
        type='text'
        placeholder='Фильм'
        required
        onChange={handleChangeFilm}
        value={film || ''}/>
        <button className='search-form__button' type='submit' />
      </form>
      <ErrorMessage errorText={isSearchEmpty ? ERROR_MESSAGE.emptyError : ''} className='message-error_search'/>
      <FilterCheckbox isCheked={isCheked} onFilterShort={onFilterShort} />
      <div className="search-form__line"/>
    </section>
  );
}

export default SearchForm;

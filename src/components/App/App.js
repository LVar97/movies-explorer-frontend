import React, { useState } from 'react';
import {
  Route, Switch, useHistory, withRouter,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import PopupInfoTooltip from '../PopupInfoTooltip/PopupInfoTooltip';
import {MOVIE_DEFAULT_FIELDS, ERROR_MESSAGE , baseUrl} from '../../utils/constants';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const [chosenMovies, setChosenMovies] = useState([]);
  const [isFindMovies, setIsFindMovies] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // errors states
  const [isGeneralServerError, setIsGeneralServerError] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const { noDataError, fakeLink } = MOVIE_DEFAULT_FIELDS;

  function clearGlobalErrors() {
    setIsGeneralServerError(false);
    setServerMessage('');
  }
  console.log(loggedIn)
  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    clearGlobalErrors();
  }

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  const handleWindowSize = () => {
    if (window.innerWidth < 770) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const checkToken = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит, действующий он или нет
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      setLoggedIn(true);
      // проверим токен
        getUser();
        getSavedMovies();
        getContentMovies();
      history.push('/movies');
    }
  };

  function getUser() {
    mainApi
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      // авторизуем пользователя
        setLoggedIn(true);
      })
      .catch((err) => {
        setServerMessage(err);
      });
  }

  const handleLogin = (data) => {
    setIsLoading(true);
    mainApi
      .authorize(data.email, data.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        checkToken(res.token);
      })
      .catch((err) => setServerMessage(err))
      .finally(() => setIsLoading(false));
  };

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => handleLogin({ email, password }))
      .catch((err) => setServerMessage(err))
      .finally(() => setIsLoading(false));
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
    setCurrentUser({});
    localStorage.clear();
  };

  function handleUpdateUser(data){
    setIsLoading(true);
    setTimeout(() => {
    mainApi
      .updateUserInfo(data)
      .then((res) => {
        setCurrentUser((user) => ({ user, ...res }));
        setServerMessage('Данные пользователя успешно обновлены');
        openPopup();
        setTimeout(() => {
          closePopup();
        }, 2500);
      })
      .catch((message) => setServerMessage(message))
      .finally(() => setIsLoading(false));
    }, 350)
  };

  function bringToSinglView(array) {
    const updatedList = array.map((movie) => {
      const modificatedMovie = {
        country: movie.country || noDataError,
        director: movie.director || noDataError,
        duration: movie.duration || noDataError,
        year: movie.year || noDataError,
        description: movie.description || noDataError,
        image:  baseUrl + movie.image.url || fakeLink,
        trailer: movie.trailerLink || fakeLink,
        thumbnail: baseUrl + movie.image.formats.thumbnail.url || fakeLink,
        owner: '',
        movieId: movie.id || noDataError,
        nameRU: movie.nameRU || noDataError,
        nameEN: movie.nameEN || noDataError,
        isFavourite: false,
      };

      return modificatedMovie;
    });

    return updatedList;
  }



  const getContentMovies = () => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(bringToSinglView(res));

      })
      .catch((err) => {
        setServerMessage(err);
        setIsGeneralServerError(true);
        openPopup();
      })
      .finally(() => setIsLoading(false));
  };

  const filterMovies = (film, array) => {
    if(array.length !== 0 && film !== null){
     return array.filter((el) => el.nameRU.toLowerCase().indexOf(film.toLowerCase()) > -1);
    }
  };

  const deleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(()=>{
        getContentMovies();
        getSavedMovies();
      })
      .catch((err) => {
        setServerMessage(err);
        setIsGeneralServerError(true);
        openPopup();
      });

  };


  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        const fav = res.map((item) => ({
          ...item,
          isFavorite: true,
        }))
        setChosenMovies(fav);
      })
      .catch((err) =>{
      setServerMessage(err);
      setIsGeneralServerError(true);
      openPopup();
    });
  };

  const saveMovie = (data) => {
   
    mainApi
      .saveMovie(data)
      .then((newMovie) => {
        newMovie.isFavorite = true;
        getSavedMovies();
      })
      .catch((err) => {
        setServerMessage(ERROR_MESSAGE.errorDataMovies);
        setIsGeneralServerError(true);
        openPopup();
      });
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
  }, []);

  React.useEffect(() => {
    checkToken();
    localStorage.getItem('savedquery', '');
  }, []);


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch >
        <Route exact path="/">
          <Main isLogged={loggedIn}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}/>
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLogged={loggedIn}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}
          onSearch={filterMovies}
          onMovieSave={saveMovie}
          onMovieDelete={deleteMovie}

          movies={movies}
          chosenMovies={chosenMovies}

          isLoading={isLoading}
          errorText={serverMessage}
          isFindMovies={isFindMovies}

        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLogged={loggedIn}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}
          onMovieDelete={deleteMovie}
          onSearch={filterMovies}

          chosenMovies={chosenMovies}

          errorText={serverMessage}

          getSavedMovies={getSavedMovies}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          isLogged={loggedIn}
          isMobile={isMobile}
          onSignOut={handleSignOut}
          onEditProfile={handleUpdateUser}
          handleBurgerClick={handleBurgerClick}
          isLoading={isLoading}
          serverMessage={serverMessage}
          clearErrors={clearGlobalErrors}
        />
        <Route path="/signin">
          <Login
          isLogged={loggedIn}
          onLogin={handleLogin}
          isLoading={isLoading}
          errorText={serverMessage}
          clearErrors={clearGlobalErrors}
        />
        </Route>
        <Route path="/signup">
          <Register
          onRegister={handleRegister}
          isLogged={loggedIn}
          isLoading={isLoading}
          errorText={serverMessage}
          clearErrors={clearGlobalErrors}
          />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>

      <PopupInfoTooltip
        isOpen={isPopupOpen}
        onClose={closePopup}
        text={serverMessage}
        isError={isGeneralServerError}
      />
      </CurrentUserContext.Provider>


      <BurgerMenu
        isMobile={isMobile}
        isOpened={isBurgerOpen}
        onClose={closeBurger} />
    </div>
  );
}

export default withRouter(App);

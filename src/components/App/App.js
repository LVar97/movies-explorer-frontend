import React, {useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
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

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);



  function handleBurgerClick () {
    setIsBurgerOpen(true);
  }
  
  function closeBurger () {
    setIsBurgerOpen(false);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
  }, []);

  const handleWindowSize = () => {
    if(window.innerWidth < 770) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  const checkToken = () => {
    // если у пользователя есть токен в localStorage, 
    // эта функция проверит, действующий он или нет
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      // проверим токен
      mainApi
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        // авторизуем пользователя
        setLoggedIn(true);
        // history.push('/');
      })
      .catch((err) => console.log(err));
    }
  };

  const handleLogin = (data) => {
    mainApi
    .authorize(data.email, data.password)
    .then((data) => {
      setLoggedIn(true);
      // history.push('/');
      // checkToken(data.token);
    })
    .catch((err) => console.log(err));
  };

  const handleRegister = ({name, email, password}) =>{
    mainApi
    .register(name, email, password)
    .then(() => handleLogin({ email, password }))
    .catch((err) => console.log(err));
  }

  // const getUserContent = () => {
  //   mainApi
  //   .getUserInfo()
  //   .then((userData) => {
  //     setCurrentUser(userData);
  //     setLoggedIn(true);
  //   })
  //   .catch((err) => console.log(err));
  // };

  const handleUpdateUser = (data) => {
    mainApi
    .updateUserInfo(data)
    .then((res) =>  setCurrentUser(res))
    .catch((err) => console.log(err));
  }

  const deleteMovie = ({ id, movie }) => {
    mainApi
    .deleteMovie(id)
    .then(() => {})
    .catch((err) => console.log(err));
  };

  const saveMovie = (data) => {
    mainApi
      .saveMovie(data)
      .then((movie) => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkToken();
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
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLogged={loggedIn}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          isLogged={loggedIn}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}
          onEditProfile={handleUpdateUser}
        />
        <Route path="/signin">
          <Login
          onLogin={handleLogin}/>
        </Route>
        <Route path="/signup">
          <Register
          setemail
          label='Имя'
          onRegister={handleRegister}
          />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
      </CurrentUserContext.Provider>
      <BurgerMenu
        isMobile={isMobile}
        isOpened={isBurgerOpen}
        onClose={closeBurger} />
    </div>
  );
}

export default App;

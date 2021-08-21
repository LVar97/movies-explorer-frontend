import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [isScreenAccess, setIsScreenAccess] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(true);
  const [isScreenLogin, setIsScreenLogin] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  function openLogin(){
    isScreenLogin(true);
  }

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

  return (
    <div className="page">
      <Switch >
        <Route exact path="/">
          <Main isLogged={isLogged}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}/>
        </Route>
        <Route path="/movies">
          <Movies isLogged={isLogged}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies isLogged={isLogged}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}/>
        </Route>
        <Route path="/profile">
          <Profile isLogged={isLogged}
          isMobile={isMobile}
          handleBurgerClick={handleBurgerClick}/>
        </Route>
        <Route path="/signin">
          <Login 
          isScreenLogin={openLogin}
          isScreenAccess={isScreenAccess}/>
        </Route>
        <Route path="/signup">
          <Register
          name='Имя'
          isScreenAccess={isScreenAccess}
          />
        </Route>
      </Switch>
      <BurgerMenu
        isMobile={isMobile}
        isOpened={isBurgerOpen}
        onClose={closeBurger} />
      {/* <NotFound/> */}
    </div>
  );
}

export default App;

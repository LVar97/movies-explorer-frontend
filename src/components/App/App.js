import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import FormScreen from '../FormScreen/FormScreen';
import NotFound from '../NotFound/NotFound';


function App() {
  const [isScreenAccess, setIsScreenAccess] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  const [isScreenLogin, setIsScreenLogin] = React.useState(false);

  function openLogin(){
    isScreenLogin(true);
  }

  return (
    <div className="page">
      <Switch >
        <Route exact path="/">
          <Main isLogged={isLogged}/>
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        {/* <Route path="/saved-movies">
          <SavedMovies/>
        </Route> */}
        <Route path="/profile">
          <Profile/>
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

      {/* <NotFound/> */}
    </div>
  );
}

export default App;
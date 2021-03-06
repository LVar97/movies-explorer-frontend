import { CurrentUserContext } from "../context/CurrentUserContext";

export default class MainApi{
	constructor(options){
		this._url = options.baseUrl;
		this._token = options.token;
	}

  _handleResponse(res) {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(err.message));
  }


	getUserInfo(){
    // console.log(localStorage.getItem('jwt'))
		return fetch(`${this._url}users/me`, {
		headers: {
			authorization: 'Bearer ' + localStorage.getItem('jwt')
		}
		})
		.then(this._handleResponse)
		.then((result) => {
			return result
		})
	}

	updateUserInfo(data) {
		return fetch(`${this._url}users/me`, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(data)

		})
		.then(this._handleResponse)
	}

	saveMovie(data){
		console.log(JSON.stringify(data))
		return fetch(`${this._url}movies`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(this._handleResponse);
	}

	deleteMovie(id){
		return fetch(`${this._url}movies/`+ id, {
			method: 'DELETE',
			headers: {
				authorization: this._token,
			},
		})
		.then(this._handleResponse)
	}

	getSavedMovies(){
		return fetch(`${this._url}movies`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
    .then(this._handleResponse);
	}

	authorize(email, password){
		return fetch(`${this._url}signin`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email, password})
		})
		.then(this._handleResponse)
		.then((data) => {
			if (data){
				// console.log(data)
				localStorage.setItem('jwt', data.token);
				// console.log('jwt', data.token)
				return data;
			}
		})
	};

	register( name, email, password ){
		return fetch(`${this._url}signup`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password })
		})
		.then(this._handleResponse)
	};
}

export const mainApi = new MainApi({
	baseUrl:'https://api.myfilms.students.nomoredomains.monster/',
	token: 'Bearer ' + localStorage.getItem('jwt')
});
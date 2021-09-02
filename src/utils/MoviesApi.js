const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export default class MoviesApi {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }

  _handleResponse(res){
		if (!res.ok) {
			return Promise.reject(`Error: ${res.status}`);
		}
		return res.json();
	}

  getMovies() {
		return fetch(`${this.BASE_URL}`, {
			method: 'GET',
		})
		.then(this._handleResponse)
		.then(data => data)
  }
}

export const moviesApi = new MoviesApi(BASE_URL);
export const BASE_URL = 'https://api.pasmovies.nomoredomainsicu.ru';

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`))
};

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function getProfileInfo() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function setProfileInfo(item) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email
    })
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function SaveMovie(item) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
    movieId: item.id,
    nameRU: item.nameRU,
    nameEN: item.nameEN,
    director: item.director,
    country: item.country,
    year: item.year,
    duration: item.duration,
    description: item.description,
    trailerLink: item.trailerLink,
    thumbnail:'https://api.nomoreparties.co' + item.image.url,
    image: 'https://api.nomoreparties.co' + item.image.url,
    })
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function deleteMovie(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }     
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
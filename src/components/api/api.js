import { getCookie } from '../../services/utils';

const apiConfig = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + getCookie('token')
  }
}

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
	return fetch(`${apiConfig.baseUrl}/ingredients`, {
		method: "GET",
    headers: apiConfig.headers
	})
		.then(res => checkResponse(res))
};

export const postOrder = (data) => {
  return fetch(`${apiConfig.baseUrl}/orders`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: data
    })
  })
    .then(res => checkResponse(res))
}

/*export const registerUser = () => {
  return fetch(`${apiConfig.baseUrl}/auth/register`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      email: "test-data@yandex.ru", 
      password: "password", 
      name: "Faster" 
    })
  })
    .then(res => checkResponse(res))
}*/

export const loginUser = (email, password) => {
  return fetch(`${apiConfig.baseUrl}/auth/login`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      email: email, 
      password: password, 
    })
  })
    .then(res => checkResponse(res))
}
const apiConfig = {
  baseUrl: "https:/norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json"
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
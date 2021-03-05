import request from 'superagent';

const URL = 'https://congress-cards.herokuapp.com/api'

export async function getCongressfolk(chamber, token) {
	const response = await request.get(`${URL}/congress/${chamber}`)
		.set({Authorization: token});

	return response.body;
}


export async function addFavorite(object, token) {
	const response = await request.post(`${URL}/my-congress`)
		.set({Authorization: token})
		.send(object);

	return response.body;
}

export async function getFavorites(token) {
	const response = await request.get(`${URL}/my-congress`)
		.set({Authorization: token});

	return response.body;
}
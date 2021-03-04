import request from 'superagent';

const URL = 'https://congress-cards.herokuapp.com/api/congress'

export async function getCongressfolk(chamber, token) {
	const response = await request.get(`${URL}/${chamber}`)
		.set({Authorization: token});

	return response.body;
}

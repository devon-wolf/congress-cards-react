import request from 'superagent';
const URL = 'https://congress-cards.herokuapp.com/auth';

async function getUserAuth(email, password, authRoute) {
	const response = await request.post(`${URL}/${authRoute}`)
			.send({ email, password });

		return response.body;
}

export async function loginOrSignup(email, password) {
	let response = {};
	try {
		console.log('trying to login');
		response = await getUserAuth(email, password, 'signin');
	}
	catch(e) {
		console.log('entered CATCH block');
		response = await getUserAuth(email, password, 'signup');
	}
	return response;
}
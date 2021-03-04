const TOKEN = 'TOKEN';

export function storeToken(user) {
	localStorage.setItem(TOKEN, JSON.stringify(user.token));
}

export function getToken() {
	const token = localStorage.getItem(TOKEN);
	try {
		const parsedToken = JSON.parse(token);
		if (parsedToken) return parsedToken;
	}
	catch(e) {
		return '';
	}
}
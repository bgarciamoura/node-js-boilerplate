
const UserController = require('@controllers/UserController');
const express = require('express');

const app = express();
const uc = new UserController();

app.get('/', (request, response) => {
	response.json({
		user: uc.showUser()
	});
});

app.listen(3000, () => {
	console.log('Server ready and listening on port 3000');
});

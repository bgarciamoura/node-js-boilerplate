const User = require('@models/User');

class UserController {
	showUser () {
		const user = new User('Bruno', 'bgarciamoura@gmail.com');
		return (user);
	}
}

module.exports = UserController;

const User = require('@models/User');

test('it should be ok', () => {
	const user = new User('Bruno', 'bgarciamoura@gmail.com');

	expect(user.name).toEqual('Bruno');
	expect(user.email).toEqual('bgarciamoura@gmail.com');
});

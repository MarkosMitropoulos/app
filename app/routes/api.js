const User = require('../models/user');

module.exports = function(router) {
	//http://localhost:8080/api/users
	router.post('/users', function(req, res) {
		let user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		user.name = req.body.name;
		if (!req.body.username || !req.body.password || !req.body.email || !req.body.name) {
			res.status(500).json({ message: 'Ensure username, email and password were provided' });
		} else {
			user.save(function(err) {
				if (err) {
					res.status(500).json({ message: 'Username or Email already exists!' });
				} else {
					res.json({ message: 'user created!' });
				}
			});
		}
	});
	return router;
};

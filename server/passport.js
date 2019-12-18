const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, cb) {
	return UserModel.findOne({username, password}).then(user => {
		if (!user) {
			return cb(null, user, {message: 'Invalid username or password'});
		}
		return cb(null, user, {message: 'Logged in successfuly!'}).catch(err => cb(err));
	});
}));
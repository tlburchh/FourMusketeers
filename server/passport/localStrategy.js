const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function (username, password, done) {
		console.log(`strategy hit: ${username}, ${password}`);
		db.User.findOne({ 'email': username }, (err, userMatch) => {
			if (err) {
				console.log(err);
				throw err;
				return done(err);
			}
			if (!userMatch) {
				console.log("No user match");
				return done(null, false, { message: 'Incorrect email' });
			}
			if (userMatch.password) {
				console.log("Trying to verify...");
				bcrypt.compare(password, userMatch.password, function (err, res) {
					if (err) {
						console.log(err);
						return done(null, false, { message: 'Incorrect password' });
					}
					else {
						console.log(res);
						return done(null, userMatch);
					}
				});
			}
			else {
				console.log("No password!!");
				return done(null, false, { message: "No password. Something is wrogn" });
			}
		});
	}
);

module.exports = strategy;

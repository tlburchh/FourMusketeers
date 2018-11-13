const db = require("../models");
const path = require("path");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    console.log('===== user!!======');
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, there is already a user with the email: ${email}`
        });
      }
      else {
        console.log("New user");
        const newUser = new db.User({
          'firstName': firstName,
          'lastName': lastName,
          'email': email,
          'password': password
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          return res.json(savedUser);
        });
      }
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function (req, res, next) {
    console.log('================');
    next();
  },
  authenticate: (req, res) => {
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  }
};
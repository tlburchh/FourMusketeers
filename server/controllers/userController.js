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
    console.log(req.body);
    db.User.findOne({ 'email': req.body.email }).then(resp => {
      console.log(`Finding email: ${resp}`);
      if (resp === null) {
        console.log("New user");
        db.User.create(req.body).then(resp => {
          console.log("User saved: " + resp);
          let cleanUser = resp;
          cleanUser.password = "";
          res.json({ message: "User saved!", user: cleanUser });
        }).catch(err => {
          console.log("Error saving user " + err);
          res.json({ error: `Error saving user: ${err}` });
        });
      }
      else if (resp.email) {
        // User matched...
        res.json({
          error: `Sorry, there is already a user with the email: ${resp.email}`
        });
      }
      else {
        console.log("Something reallly odd happened.");
        res.json({ message: "Super weird error" });
      }
    }).catch(err => {
      console.log(err);
      res.json(err);

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
const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const validateEmail = email => {
    const emailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegex.test(email);
}
const validateNoNumbers = str => {
    const numRegex = RegExp(/^([^0-9]*)$/);
    return numRegex.test(str);
}

const User = new Schema({
    firstName: {
        type: String,
        required: "First name is required",
        trim: true,
        // no numbers allowed
        validate: [validateNoNumbers, "Please enter a valid name"]

    },
    lastName: {
        type: String,
        required: "Last name is required",
        trim: true,
        // No numbers allowed
        validate: [validateNoNumbers, "Please enter a valid name"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
    },

    password: {
        type: String,
        trim: true,
        required: "Password is required"
    }
})

User.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

User.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', User);
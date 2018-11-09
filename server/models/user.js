const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const validateEmail = email => {
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegex.test(email);
}
const validateNoNumbers = str => {
    const numRegex = new RegExp(/^([^0-9]*)$/);
    return numRegex.test(str);
}

const validatePassword = str => {
    // const passRegex = new RegExp('\^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    const passRegex = new RegExp('\^(?=.*?[A-Z])(?=.*?[a-z])(?=.{4,}$');
    return passRegex.test(str);
}

const User = new Schema({
    firstName: {
        type: String,
        required: "First name is required",
        trim: true,
        // no numbers allowed
        validate: [validateNoNumbers, "Please enter a valid first name"]

    },
    lastName: {
        type: String,
        required: "Last name is required",
        trim: true,
        // No numbers allowed
        validate: [validateNoNumbers, "Please enter a valid last name"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [validatePassword, "Password must contain one upper and one lower case letter, one special character, one number, and be at least 8 long"]
    },

    isMember: {
        type: Boolean,
        required: true,
        default: false
    },

    newsLetter: {
        type: Boolean,
        required: true,
        default: false
    },

    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    }]
});

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

module.exports = mongoose.model('User', User);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    color: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Color', colorSchema);
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const ratingsSchema = new Schema ({
    numericalRating: {
        type: Number,
        trim: true,
        required: false
    },

    keyRating:{
        type: Number,
        trim: true,
        required: false
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user' 
    },

    wines: [{
        type: Schema.Types.ObjectId,
        ref: 'wines'
    }]
})

module.exports = mongoose.model('Ratings',ratingsSchema);
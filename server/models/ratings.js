const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema ({

    numericalRating: {
        type: Number,
        trim: true,
        required: true,
        default: null
    },
// This will be an array of true/false which can be cross referenced with the wine's keywords
    keyWordRating:[{
        type: Boolean
    }],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    wine: {
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }
})

module.exports = mongoose.model('Rating', ratingSchema);
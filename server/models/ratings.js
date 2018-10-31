const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema ({

    numericalRating: {
        type: Number,
        trim: true,
        required: true,
        default: null
    },

    keyWordRating:[{
        type: Schema.Types.ObjectId,
        ref: 'Keyword'
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
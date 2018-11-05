const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },

    color: [{
        type: String,
        trim: true,
        required: "Color is required"
    }],

    description: {
        type:  String,
        trim: true,
        required: "Description is required"
    },

    priceRegular: {
        type: String,
        trim: true,
        required: "Price is required"
    },
    
    isAvailable: {
        type: Boolean,
        required: true,
        default: true
    },

    timesTasted: {
        type: Number,
        required: true,
        default: 0
    },

    keywords: [{
        type: Schema.Types.ObjectId,
        ref: 'Keyword'
    }],

    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]

})

module.exports = mongoose.model('Wine', wineSchema);
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

function getPrice(number){
    return (number/100).toFixed(2);
};

function setPrice(number){
    return number * 100;
};

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
        required: true
    },

    price: {
        type: Number,
        get: getPrice,
        set: setPrice
    },

    isAvailable: {
        type: Boolean,
        required: true,
        default: true
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
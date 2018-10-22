const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

function getPrice(number){
    return (number/100).toFixed(2);
};

function setPrice(number){
    return number * 100;
};

const Wines = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
 
    color: {
        type: String,
        trim: true,
        required: "Color is required"
    },

    description: {
        type:  String,
        trim: true,
        required: true
    },

    price: {
        type: Number,
        get: getPrice,
        set: setPrice
    }


})

module.exports = mongoose.model('Wines', Wines);
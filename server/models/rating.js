const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const rating = new Schema ({
    rating: {
        type: Number,
        require: true,

    }
})

module.exports = mongoose.model('rating', rating)
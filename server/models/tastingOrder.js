const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const orderSchema =  new Schema ({
    orderNumber: {
        type: Number,
        required: true,
        unique: true
    },

    wines: {
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }
})

module.exports = mongoose.model('tastingOrder', orderSchema);
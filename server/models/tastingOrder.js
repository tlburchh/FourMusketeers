const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const orderSchema =  new Schema ({
    orderNumber: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Order', orderSchema);
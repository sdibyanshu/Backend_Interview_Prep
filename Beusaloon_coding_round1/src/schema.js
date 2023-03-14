const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const iSchem = new Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

module.exports = mongoose.model('Inventry', iSchem);

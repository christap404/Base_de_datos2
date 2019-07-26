const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompraSk = new Schema({
    id_compra: String,
    fec_compra: Date,
    val_com: String,
    id_cliente: String
});

module.exports = mongoose.model('compra', CompraSk);

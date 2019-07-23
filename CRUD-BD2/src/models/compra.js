const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompraSk = new Schema({
    id_compra: String,
    fecha_compra: Date,
    valor_compra: String,
    id_cliente: String
});

module.exports = mongoose.model('compra', CompraSk);

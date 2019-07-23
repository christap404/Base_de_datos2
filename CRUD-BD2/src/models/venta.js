const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSK = new Schema({
 id_venta: String,
 fecha: Date,
 valor: String,
 id_cliente: String
});

module.exports = mongoose.model('venta', VentaSK);

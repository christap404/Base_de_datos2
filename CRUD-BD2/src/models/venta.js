const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSK = new Schema({
 id_venta: String,
 fec_venta: Date,
 val_venta: String,
 id_cliente: String
});

module.exports = mongoose.model('venta', VentaSK);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSk = new Schema({
    id_cliente: String,
    nombre_cliente: String,
    direccion: String,
    telefono: String
});

module.exports = mongoose.model('clientes', ClienteSk);



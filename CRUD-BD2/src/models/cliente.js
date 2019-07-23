const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSk = new Schema({
    Id: String,
    Nombre: String,
    Direccion: String,
    Telefono: String
});

module.exports = mongoose.model('clientes', ClienteSk);



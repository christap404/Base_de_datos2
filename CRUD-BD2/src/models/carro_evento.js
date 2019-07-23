const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Carro_eventoSk = new Schema({
    id_placa: String,
    id_evento: String
});

module.exports = mongoose.model('carro_evento', Carro_eventoSk);

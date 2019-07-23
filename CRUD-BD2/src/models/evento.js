const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventoSK = new Schema({
 id_evento: String,
 num_evento: String
});

module.exports = mongoose.model('evento', EventoSK);

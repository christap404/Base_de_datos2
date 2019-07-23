const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaisSK = new Schema({
    codigo: String,
    nombre: String
});

module.exports = mongoose.model('pais', PaisSK);
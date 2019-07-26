const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaisSK = new Schema({
    cod_pais: String,
    nom_pais: String
});

module.exports = mongoose.model('pais', PaisSK);
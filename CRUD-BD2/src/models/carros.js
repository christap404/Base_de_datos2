const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarroSk = new Schema({
    id_placa: String,
    marca: String,
    modelo: String,
    color: String,
    valor: String,
    nom_pais: String,
    id_cliente:String,
    id_compra: String,
    id_venta: String

})

module.exports = mongoose.model('carros', CarroSk)
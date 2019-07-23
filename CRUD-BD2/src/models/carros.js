const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarroSk = new Schema({
    id_placa: String,
    marca: String,
    modelo: String,
    color: String,
    precio: String,
    Id: String,
    nombre:String,
    id_venta: String

})

module.exports = mongoose.model('carros', CarroSk)
const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')


//CONECTANDO
const URL = ''
mongoose.connect('mongodb+srv://bd2:bd2123@cluster0-fd3qi.mongodb.net/carros-antiguos?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(db => console.log("Conectado a la BD"))


    //Importando rutas
const indexRouters = require('./routers/index')


//Settings
app.set('port', process.env.PORT || 3000); //Puerto donde se conecta
app.set('views', path.join(__dirname, 'views')); //Vistas frontend
app.set('views engine', 'ejs');

//midlewares ()
app.use(morgan('dev')); //Poder mostrar 
app.use(express.urlencoded({ extended: true}))

//RUTAS
app.use('/', indexRouters)
app.use('carros-antiguos', indexRouters)
app.use('compras-ventas', indexRouters)
app.use('consultar-carro', indexRouters)


//Starting server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
});
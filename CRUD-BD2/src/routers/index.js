
const express = require('express');
const router = express.Router();

const modelo = require('../models/cliente')
const modelocarro = require('../models/carros')
const modelopais = require('../models/pais')
const modelocompra = require('../models/compra')
const modeloventa = require('../models/venta')

 

//Mostrar carros
router.get('/carros-antiguos', async (req, res) => {
    const Rmodelo = await modelo.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

    res.render('carros-antiguos.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })
})




//mostrar 
router.get('/', async (req, res) => {
    const Rmodelo = await modelo.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

    res.render('index.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })
    
});



//Insertar
router.post('/add', async (req, res) => {
    const cliente = new modelo(req.body);
    await cliente.save()
    const carro = new modelocarro(req.body);
    await carro.save()
    const pais = new modelopais(req.body);
    await pais.save()
    const compra = new modelocompra(req.body);
    await compra.save()
    const venta = new modeloventa(req.body);
    await venta.save()
    res.redirect('/')   
});

//Consultar solo uno
router.get('/edit/:id', async (req, res) =>{
    const {id} = req.params;
    const editclient = await modelo.find(id);
    res.render('edit.ejs', {
        editclient
    })
})

//Editar
router.post('/edit/:id', async(req, res) => {
    const {id} = req.params;
    await modelo.update({Id :id}, req.body);
    res.redirect('/');

})



//Borrar todo registro
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await modelo.remove({Id: id});
    await modelocarro.remove({Id: id})
   
    
    res.redirect('/')
})

module.exports = router;
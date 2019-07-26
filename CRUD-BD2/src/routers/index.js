
const express = require('express');
const router = express.Router();

const modelocliente = require('../models/cliente')
const modelocarro = require('../models/carros')
const modelopais = require('../models/pais')
const modelocompra = require('../models/compra')
const modeloventa = require('../models/venta')

 




//Mostrar carros
router.get('/carros-antiguos', async (req, res) => {
    const Rmodelo = await modelocliente.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

    res.render('carros-antiguos.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })
})


router.get('/carros-antiguos/:id', async (req, res) => {
    const {id} = req.params;
    const Cmodelo = await modelocliente.find({id_cliente:id});
    console.log(Rmodelo)
    //const Rcarro = await modelocarro.find({id_placa:id});
    //const Rpais = await modelopais.find();

    res.render('carros-antiguos.ejs',{
        Cmodelo,
        
    })
})


//mostrar 
router.get('/', async (req, res) => {
    const Rmodelo = await modelocliente.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

    res.render('index.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })
    
});


router.get('/vender/:id', async(req,res) => {
    const {id} = req.params;
    const Rcarro = await modelocarro.findOne({id_placa:id});
    res.render('vender.ejs',{
        Rcarro
    })
})

//COMPRAS Y VENTAS
router.get('/ventas', async (req, res) => {
    const Rmodelo = await modelocliente.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

 /*   res.render('ventas.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })*/
    
});


//Insertar
router.post('/add', async (req, res) => {
    const cliente = new modelocliente(req.body);
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
router.get('/edit/:id/:id2', async (req, res) =>{
    const {id} = req.params;
    const {id2} = req.params;
    const editclient = await modelocliente.findOne({id_cliente:id});
     const editcarro = await modelocarro.findOne({id_placa:id2})
    console.log(editclient)
    res.render('edit.ejs', {
        editclient,
        editcarro
        
    })
    
})

//Editar
router.post('/edit/:id/:id2', async(req, res) => {
    const {id,id2} = req.params;

    await modelocliente.update({id_cliente :id}, req.body);
    await modelocarro.update({id_placa :id2}, req.body);
    res.redirect('/');

})


//COMPRA Y VENTA
router.get('/ventas'), async(req, res) =>{
    const Rmodelo = await modelocliente.find();
    console.log(Rmodelo)
    const Rcarro = await modelocarro.find();
    const Rpais = await modelopais.find();

    res.render('ventas.ejs',{
        Rmodelo,
        Rcarro,
        Rpais
    })
}

//Borrar todo registro
router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await modelocliente.remove({id_cliente: id});
    await modelocarro.remove({id_cliente: id})
   
    
    res.redirect('/')
})

module.exports = router;
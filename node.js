const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto 8080");
});


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/api/productos', (req, resp) => {
    let productos = [{nombre:'heladera', precio:100}, {nombre:'cocina', precio:102}];
    
    if(Object.entries(req.query).length > 0) {
        resp.json({
            result: 'devuelve todos los productos con parametros',
            productos: productos,
            query: req.query
        });
    } else {
        resp.json({
            result: 'devuelve todos los productos sin parametros',
            productos: productos
        });
    }
});

app.get('/api/productos/:id', (req, resp) => {
    let productos = [{nombre:'heladera', precio:100, id:5}, {nombre:'cocina', precio:102, id:6}];

    resp.json({
        result: 'devuelve un producto según su id',
        producto: productos[req.params.id],
        id: req.params.id, 
        error: 'producto no encontrado'
    });
})

app.post('/api/productos', (req, resp) => {

    resp.json({
        result: 'recibe y agrega un producto, y lo devuelve con su id asignado',
        body: req.body
    });
})

app.put('/api/productos/:id', (req, resp) => {
 
    resp.json({
        result: 'recibe y actualiza un producto según su id',
        id: req.params.id, 
        body: req.body
    });
})

app.delete('/api/productos/:id', (req, resp) => {
 
    resp.json({
        result: 'elimina un producto según su id',
        id: req.params.id
    });
})
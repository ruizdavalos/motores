const express = require('express')
const Contenedor = require('./segundoDesafio.js')

const app = express()
const ContenedorProductos = new Contenedor('./producto.txt')

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`))  

app.get('/productos', async (req, res) => {
    try {
        const productos = await ContenedorProductos.getAll()

        res.send(productos)
    } catch (error) {
        res.send(error)
    }
})

app.get('/productoRandom', async (req, res) => {
    const productos = await ContenedorProductos.getAll()

    const indice = Math.floor(Math.random() * productos.length)

    res.send(productos[indice])

})
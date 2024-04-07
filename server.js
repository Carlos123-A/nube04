const express = require('express');

const app = express();


app.get('/clientes', (req, res) => {
    const clientes = ['alberth', 'jesus', 'carlos'];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const productos = ['mochila', 'lapiz', 'borrador'];
    res.json(productos);
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

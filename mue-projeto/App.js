const express = require('express');
const app = express();
app.use(express.json())

app.get ('/saudacao', (req, res) => {
    res.json({ mensagem: 'Salve Mundo'})
    })


    module.exports = app;
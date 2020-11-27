/* Instancias para el servidor */
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Rutas de la app*/
const IndexRouter = require('./routes/index')

/* Variables */
app.set('port', 5000)

/* Rutas */
app.use('/', IndexRouter)

/* Listen */
app.listen(app.get('port'), () => console.log(`API listening at port ${app.get('port')}`))
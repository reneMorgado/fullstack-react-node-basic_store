/* Intancias para node */
const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()

/* Instancias para PostgreSQL */
const { Pool } = require('pg')
const dbTable = 'products'
const config = {
    user: 'nodestruser',
    host: 'localhost',
    password: '1234',
    database: 'nodestr'
}
const pool = new Pool(config)

/* CORS */
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

//Get all products
router.get('/', async(req, res) => {
    try {
        let sq = await pool.query(`select * from ${dbTable}`);
        res.send(sq.rows).status(200)
    } catch (e) {
        console.log(e)
    }
})

//Add a product
router.post('/add', upload.none(), async(req, res) => {
    let Pname = req.body.name
    let Pimg = req.body.img
    let Pdescription = req.body.description
    let Pamount = parseInt(req.body.amount, 10)
    let Pprice = parseInt(req.body.price, 10)
    let text = `INSERT INTO ${dbTable}(name, img, description, amount, price) VALUES('${Pname}', '${Pimg}', '${Pdescription}', ${Pamount}, ${Pprice})`
    let sq = await pool.query(text)
    res.send(sq.command).status(200)
})

//delete a product
router.delete('/delete/:id', async(req, res) => {
    try {
        let Pid = req.params.id
        let text = `DELETE FROM ${dbTable} WHERE id = ${Pid} `
        let sq = await pool.query(text)
        res.send(sq.command).status(200)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.post('/update/:id', upload.none(), async(req, res) => {
    console.log(req.body)
    try {
        console.log(req.body)
        let Pid = req.params.id
        let Nname = req.body.name
        let Nimg = req.body.img
        let Ndescription = req.body.description
        let Namount = parseInt(req.body.amount, 10)
        let Nprice = parseInt(req.body.price, 10)
        let text = `UPDATE products SET name = '${Nname}', img = '${Nimg}', description = '${Ndescription}', amount = ${Namount}, price = ${Nprice} WHERE id = ${Pid} `
        let sq = await pool.query(text)
        res.send(sq.command).status(200)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router
import express from 'express'

const api = express();

api.get('/product/:id/:category', (req, res) => {
    const id = req.params.id;
    const category = req.params.category;
    res.send(`this product has id ${id} and you category this ${category}.`)
})

api.listen(3000, () => {
    console.log("confirmed acess for this server")
})
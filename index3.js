import express from 'express'

const api = express();

api.get('/user/:name/:age', (req, res) => {
    const name_user = req.params.name;
    const age_user = req.params.age;
    res.send(`name user this ${name_user} and age this ${age_user}`)
})


api.listen(8080, () => {
    console.log("completed acess for server")
})
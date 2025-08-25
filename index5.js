import express from 'express' 

const api = express();
api.use(express.json());
let id_user = 1;
let table = [];

api.post('/create', (req, res) => {
    const {id, name} = req.body;

    if (!id || !name) {
        res.status(400).json({error: "not informations complete in archive json"})
        return
    }

    const user = {
        name: name,
        id: id,
        num: id_user++
    }

    table.push(user)
    res.status(201).json({message: "sucessed for add informations archive json"})
})

api.listen(4000, () => {
    console.log("confirmed acess for server")
})
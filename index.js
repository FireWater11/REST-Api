import express from 'express'

const api = express();
let update_id = 1;
let users = [];
api.use(express.json());

api.get('/connect', (req ,res) => {
    console.log("connect in server")
    res.send("connect in server, not ocurrency bugs")
})

api.get('/connect/:id', (req ,res) => {
    let id = req.params.id
    if (id == "0") {
        res.send("admin")
    } else if (id == "1") {
        res.send("user")
    } else {
        res.send("not identified")
    }
})

api.get('/users', (req, res) => {
    res.status(200).json(users)
})

api.post('/insert', (req, res) => {
    const {id, name} = req.body;

    if (!id || !name) {
        res.status(400).json({error: "error in autentication archive json"})
        return
    }

    const user = {
        name: name,
        id: id,
        codg: update_id++
    }

    users.push(user);
    res.status(201).json({ message: "sucessed in autentication archive json"})

})

api.listen(9000, () => {
    console.log("door 9000 open")
})

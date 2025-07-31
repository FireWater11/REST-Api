import express from 'express';

const api = express();
let last_update = 1;
let usuarios = [];

api.use(express.json());

api.get('/usuarios', (req, res) => {
    res.send('rota GET /usuarios acessada com sucesso');
});

api.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`rota GET /usuario/${id} acessada com sucesso.`);
})

api.get('/usuario', (req, res) => {
    res.status(200).json(usuarios);
})

api.post('/usuario/criar', (req, res) => {
    const { name, email, idade } = req.body;

    const userTemp = {
        id: last_update++,
        name: name,
        email: email,
        idade: idade
    }

    if (!name || !email || !idade) {
        res.status(400).json({ error: "informacoes invalidas. insira corretamente no arquivo json." });
        return;
    }

    usuarios.push(userTemp);
    res.status(200).json({ message: "cadastro bem sucedido"})
});

api.listen(7070, () => {
    console.log("Servidor rodando na porta 7070");
});
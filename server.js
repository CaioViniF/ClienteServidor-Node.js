import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Olá, cliente!" });
});

app.post('/api', (req, res) => {
    res.json({ received: req.body });
});

app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:${3000}");
});
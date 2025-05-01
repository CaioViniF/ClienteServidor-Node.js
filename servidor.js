import express from "express";

const app = express();
app.listen(443, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Rota iniciada!");
});
Servidor / Cliente

Importação e Configuração, utilizamos o frameWork Expresse.

Lado Servidor:

import express from 'express'; const app = express(); const PORT = 3000;

Lado Cliente:

const API_URL = 'http://localhost:3000/api';

O Express vai ser instanciado através da constante app, a variável PORT define a conexão do servidor.
Interpretação do corpo de requisição enviada em formato JSON.

Lado servidor:

app.use(express.json());

Consegue acessar os dados diretamente do (req.body) ao receber a requisção POST.
Incializa a função GET e POST dos dados.

Lado cliente:

async function fetchData() fetchData();

Inicializa e encerra através do fetchData();
Implementação de rotas GET A rota GET responde a solicitação enviada para o caminho /api.

Lado servidor:

app.get('/api', (req, res) => { res.json({ message: "Olá, cliente!" }); });

Lado cliente:

const getResponse = await fetch(API_URL); console.log("GET:", await getResponse.json());

Ao receber, o servidor retorna um objeto JSON com a mensagem ("Olá, cliente!").
Implementação de rotas POST A rota POST tabmém responde o caminho /api. Ela é utilizada para receber dados enviados pelo cliente.

Lado servidor:

app.post('/api', (req, res) => { res.json({ received: req.body }); });

Lado cliente:

const postResponse = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: "hello" }) }); console.log("POST:", await postResponse.json()); }};

O servidor responde com um objeto JSON obtendo a chave received, que tem o valor enviado no (req.body)
Inicialização do servidor O servidor é iniciado através do método listen, que aguarda a conexão na porta.

app.listen(PORT, () => { console.log(Servidor rodando em http://localhost:${3000}); });

Uma mensagem de confirmação é exiobida no terminal indicando que o servidor está escutando e rodando na porta instaciada.
Conclusão Possui os métodos GET e POST, implemetando de maneiras simples e eficiente um servidor HTTP com conexão servidor x cliente.

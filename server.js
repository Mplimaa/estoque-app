let produtos = []; // Certifique-se de que essa variável esteja inicializada

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurações do middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'seuSegredo', resave: false, saveUninitialized: true }));
app.use(express.static('public')); // Para servir arquivos estáticos
app.use('/imagens', express.static(path.join(__dirname, 'imagens')));

app.get('/buscar', (req, res) => {
    const tipo = req.query.tipo;
    const valor = req.query.valor;

    // Lógica para buscar produtos (exemplo)
    const resultados = produtos.filter(produto => {
        switch (tipo) {
            case 'marca':
                return produto.marca.toLowerCase().includes(valor.toLowerCase());
            case 'modelo':
                return produto.modelo.toLowerCase().includes(valor.toLowerCase());
            case 'id':
                return produto.id.toString() === valor;
            default:
                return false;
        }
    });

    res.json(resultados);
});

app.get('/produtos', (req, res) => {
    res.json(produtos); // Retorna todos os produtos
});




//Logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Erro ao fazer logout.');
        }
        res.sendStatus(200); // Resposta bem-sucedida
    });
});


// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Usuário e senha (em um ambiente real, use um banco de dados)
const usuario = {
    username: 'admin',
    password: 'senha123' // Nunca faça isso em produção!
};

// Rota para login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === usuario.username && password === usuario.password) {
        req.session.authenticated = true;
        res.send('Login bem-sucedido');
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

// Rota para controle de estoque
app.get('/estoque', (req, res) => {
    if (req.session.authenticated) {
        res.sendFile(path.join(__dirname, 'public', 'estoque.html'));
    } else {
        res.status(403).send('Acesso negado');
    }
});


function fazerLogout() {
    fetch('/logout', {
        method: 'POST',
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/login'; // Redireciona para a página de login
        } else {
            alert('Erro ao fazer logout. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}


// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// login.js
function fazerLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Tentando login com: ${'admin'} e ${'senha123'}`); // Adicione esta linha


    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/estoque'; // Redireciona para a página de estoque
        } else {
            document.getElementById('mensagem').innerText = 'Usuário ou senha incorretos.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerText = 'Erro ao tentar fazer login. Tente novamente.';
    });
}

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

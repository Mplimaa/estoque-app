let estoque = {};
let contador = 1; // Para gerar códigos de produtos únicos
let produtosBuscados = []; // Armazena os produtos encontrados na última busca

let produtoEditando = null; // Para armazenar o código do produto que está sendo editado

function carregarEstoque() {
    const estoqueSalvo = localStorage.getItem('estoque');
    if (estoqueSalvo) {
        estoque = JSON.parse(estoqueSalvo);
        contador = Object.keys(estoque).length + 1; // Atualiza o contador
        atualizarTabela();
    }
}

function salvarEstoque() {
    localStorage.setItem('estoque', JSON.stringify(estoque));
}

function adicionarProduto() {
    const produto = document.getElementById('produto').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const custo = parseFloat(document.getElementById('custo').value);
    const estoqueMinimo = parseInt(document.getElementById('estoqueMinimo').value);

    if (!produto || !marca || !modelo || isNaN(quantidade) || isNaN(custo) || isNaN(estoqueMinimo)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Se estamos editando, atualizamos o produto existente
    if (produtoEditando !== null) {
        estoque[produtoEditando] = {
            produto,
            marca,
            modelo,
            quantidade,
            custo,
            estoqueMinimo
        };
        produtoEditando = null; // Resetar após a edição
    } else {
        // Gerar código automaticamente
        const codigoProduto = contador;

        // Adicionar novo produto
        estoque[codigoProduto] = {
            produto,
            marca,
            modelo,
            quantidade,
            custo,
            estoqueMinimo
        };
        contador++; // Incrementa o contador após adicionar um novo produto
    }

    atualizarTabela();
    limparCampos();
    salvarEstoque(); // Salvar estoque após adicionar ou editar
}

function removerProduto(codigo) {
    const info = estoque[codigo];

    const quantidadeARemover = parseInt(prompt('Quantas unidades deseja remover?'));

    if (isNaN(quantidadeARemover) || quantidadeARemover <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (quantidadeARemover > info.quantidade) {
        alert('Quantidade a remover é maior que a disponível.');
        return;
    }

    if (info.quantidade - quantidadeARemover < info.estoqueMinimo) {
        alert('Não é possível remover o produto. A quantidade mínima em estoque seria atingida.');
        return;
    }

    info.quantidade -= quantidadeARemover;

    if (info.quantidade <= 0) {
        delete estoque[codigo];
    }

    atualizarTabela();
    salvarEstoque(); // Salvar estoque após remover
}

function editarProduto(codigo) {
    const info = estoque[codigo];
    document.getElementById('produto').value = info.produto;
    document.getElementById('marca').value = info.marca;
    document.getElementById('modelo').value = info.modelo;
    document.getElementById('quantidade').value = info.quantidade;
    document.getElementById('custo').value = info.custo;
    document.getElementById('estoqueMinimo').value = info.estoqueMinimo;

    // Atualiza a função do botão para salvar alterações
    produtoEditando = codigo; // Armazena o código do produto que está sendo editado
    document.getElementById('botaoAdicionar').innerText = 'Salvar Alterações';
    document.getElementById('botaoAdicionar').onclick = adicionarProduto; // Chama a função de adicionar
}

function limparCampos() {
    document.getElementById('produto').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('custo').value = '';
    document.getElementById('estoqueMinimo').value = '';
    document.getElementById('botaoAdicionar').innerText = 'Adicionar Produto';
    document.getElementById('botaoAdicionar').onclick = adicionarProduto; // Reseta a função do botão
}


function limparBusca() {
  

	  if (valorBusca !== '') {
          document.getElementById('valorBusca').value = '';
          document.getElementById('tipoBusca').value = 'marca'; // Reseta para a primeira opção, se desejar

          // Chama a função para carregar todos os produtos na tabela
          atualizarTabela();
	  return;
	}else if (valorBusca === ' '){
          alert('Não foi informado nenhum valor!');
	  atualizarTabela();
	  return;

        }
}	


function atualizarTabela() {
    const tabelaBody = document.querySelector('#tabelaEstoque tbody');
    tabelaBody.innerHTML = '';

    for (const [codigo, info] of Object.entries(estoque)) {
        const custoTotal = info.quantidade * info.custo;
        const row = `<tr>
                        <td>${codigo}</td>
                        <td>${info.produto}</td>
                        <td>${info.marca}</td>
                        <td>${info.modelo}</td>
                        <td>${info.quantidade}</td>
                        <td>R$ ${info.custo.toFixed(2)}</td>
                        <td>R$ ${custoTotal.toFixed(2)}</td>
                        <td>${info.estoqueMinimo}</td>
                        <td>
                           <button onclick="editarProduto(${codigo})" title="Editar Produto">Editar</button>
                           <button onclick="removerProduto(${codigo})" title="Dar baixa do Produto">Baixar</button>
                        </td>
                    </tr>`;
        tabelaBody.innerHTML += row;
    }
}

function baixarEstoque() {
    const jsonString = JSON.stringify(estoque, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'estoque.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function buscarProduto() {
    const tipoBusca = document.getElementById('tipoBusca').value;
    const valorBusca = document.getElementById('valorBusca').value.toLowerCase();
    const tabelaBody = document.querySelector('#tabelaEstoque tbody');
    
    // Limpa a tabela antes de buscar
    tabelaBody.innerHTML = '';

    let produtosEncontrados = false;

    for (const [codigo, info] of Object.entries(estoque)) {
        let mostrarProduto = false;
	
	if (valorBusca === '') {
	        alert('Não foi informado nenhum valor!');
		atualizarTabela();
	        return;
        }

        if (tipoBusca === 'marca' && info.marca.toLowerCase().includes(valorBusca)) {
            mostrarProduto = true;
        } else if (tipoBusca === 'modelo' && info.modelo.toLowerCase().includes(valorBusca)) {
            mostrarProduto = true;
        } else if (tipoBusca === 'id' && codigo === valorBusca) {
            mostrarProduto = true;
        }

        if (mostrarProduto) {
            const custoTotal = info.quantidade * info.custo;
            const row = `<tr>
                            <td>${codigo}</td>
                            <td>${info.produto}</td>
                            <td>${info.marca}</td>
                            <td>${info.modelo}</td>
                            <td>${info.quantidade}</td>
                            <td>R$ ${info.custo.toFixed(2)}</td>
                            <td>R$ ${custoTotal.toFixed(2)}</td>
                            <td>${info.estoqueMinimo}</td>
                            <td>
                                <button onclick="editarProduto(${codigo})">Editar</button>
                                <button onclick="removerProduto(${codigo})">Remover</button>
                            </td>
                        </tr>`;
            tabelaBody.innerHTML += row;
        }
    }

    // Se não encontrar nenhum produto
    if (tabelaBody.innerHTML === '') {
        tabelaBody.innerHTML = '<tr><td colspan="9">Nenhum produto encontrado.</td></tr>';
    }
}



// Chamar carregarEstoque ao iniciar
carregarEstoque();


window.onload = function() {
    carregarProdutos(); // Carrega todos os produtos ao iniciar
};
# estoque-app

# Controle de Estoque

## Descrição

Este é um sistema simples de controle de estoque desenvolvido em HTML, CSS e JavaScript. O sistema permite cadastrar, editar e remover produtos do estoque, além de possibilitar a consulta de produtos por marca, modelo ou ID.

## Funcionalidades

- **Cadastro de Produtos**: Adicione novos produtos ao estoque com informações como nome, marca, modelo, quantidade, custo e estoque mínimo.
- **Edição e Remoção**: Edite ou remova produtos já cadastrados através de botões na tabela de produtos.
- **Busca de Produtos**: Consulte produtos no estoque utilizando filtros por marca, modelo ou ID.
- **Download em JSON**: Exporte todos os produtos cadastrados em um arquivo JSON.
- **Acessibilidade**: O sistema foi desenvolvido com acessibilidade em mente, permitindo que os usuários identifiquem elementos na tela ao passar o mouse.
- **Login e Senha**: O sistema conta com uma funcionalidade de login para acessar o controle de estoque.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- LocalStorage para armazenamento de dados


## Como Rodar o   Projeto

1. **Pré-requisitos**:
   - Certifique-se de ter o Node.js instalado em seu ambiente local. Você pode baixá-lo [aqui](https://nodejs.org/).


2. **Clone o repositório**:
   ```bash
   git clone https://github.com/Mplimaa/estoque-app.git
   cd estoque-app


3. **Instalação de Dependências**:

Se você estiver utilizando um servidor Node.js, instale as dependências necessárias. Acesse o diretório do projeto e execute:
   npm install

   
4. **Rodar o Servidor**:

   Inicie o servidor local:
   npm start

5. **Como Usar**: 

No bash, após acessar o diretório do arquivo, instalar as dependencias do node e/ou baixar, já pode iniciar o npm no lado servidor. Assim que node.server tiver iniciado, acessar o seu navegador e digitar http://localhost:3000/login , para acessar a página de login e inserir as credenciais a seguir:
   Usuário: admin
   Senha: senha123
Após logar, você será redirecionado para a tela de controle de estoque.
Utilize a seção de busca para encontrar produtos específicos ou adicione novos produtos utilizando o formulário disponível.
Para exportar o estoque, clique no botão "Baixar estoque".

6. **Dicas para Melhorias Futuras**: 

Implementar um backend para armazenar os dados em um banco de dados.
Adicionar autenticação com sistema de usuários e senhas mais seguras.
Melhorar a interface com um framework CSS, como Bootstrap ou Tailwind.
Adicionar validações mais robustas para entradas do usuário.
Implementar responsividade, e efetuar testes unitários para as funções JavaScript.


**Licença**: 

Este projeto simples de estoque, pode ser modificado e está disponível, desde que seja usuado para fins de estudo e não para uso comercial. O sistema estoque-app foi feito por Michele Lima 🤩 | 2024 Todos os direitos reservados.
Baseado no controle de estoque sugerido pelo Sebrae SP para microempreendedores, assim fui implementando algo que pensei ser útil, mas de maneira simples para facilitar o controle e manutenção do cadastro dos produtos.


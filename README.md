# estoque-app

# Controle de Estoque

## Descrição

Este é um sistema simples de controle de estoque desenvolvido em HTML, CSS e JavaScript. O sistema permite cadastrar, editar e remover produtos do estoque, além de possibilitar a consulta de produtos por marca, modelo ou ID.

## Funcionalidades

- **Cadastro de Produtos**: Adicione novos produtos ao estoque com informações como nome, marca, modelo, quantidade, custo e estoque mínimo.
- **Edição e Remoção**: Edite ou remova produtos já cadastrados através de botões na tabela de produtos.
- **Busca de Produtos**: Consulte produtos no estoque utilizando filtros por marca, modelo ou ID.
- **Download em JSON**: Exporte todos os produtos cadastrados em um arquivo JSON.
- **Acessibilidade**: O sistema foi desenvolvido com acessibilidade em mente, permitindo que os usuários identifiquem elementos na tela ao passar o mouse, e navegação via teclado.
- **Login e Senha**: O sistema conta com uma funcionalidade de login para acessar o controle de estoque.
- ***Observação***: No vídeo Demonstração-estoque-app, não foram capturadas a acessibilidade e o download do arquivo, devido recurso limitado da ferramenta que gravou o vídeo, porém você pode baixar e verificar a autenticidade da implementação.

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

Abra o prompt de comando do Windows, e acesse o diretório do arquivo, se for necessário, instalar as dependencias do node e/ou baixar. Então, iniciar o npm no lado servidor, assim que node.server tiver iniciado, acessar o seu navegador e digitar http://localhost:3000/login , e inserir as credenciais a seguir:
   Usuário: admin
   Senha: senha123
Após logar, você será redirecionado para a tela de controle de estoque.
Utilize a seção de busca para encontrar produtos específicos ou adicione novos produtos utilizando o formulário disponível.
Para exportar o estoque, clique no botão "Baixar estoque".


6. **Acessibilidade**: 
O Estoque App foi desenvolvido com atenção à acessibilidade para garantir que todos os usuários possam interagir de maneira eficaz. As seguintes práticas foram implementadas:

Navegação por Teclado: Todos os elementos interativos, como botões e campos de entrada, podem ser acessados e utilizados apenas com o teclado.
Etiquetas e Descrições: Os campos de entrada possuem label apropriados, garantindo que leitores de tela possam descrever os campos de forma precisa.


7. **Dicas para Melhorias Futuras**: 

Implementar um backend para armazenar os dados em um banco de dados.
Adicionar autenticação com sistema de usuários e senhas mais seguras.
Melhorar a interface com um framework CSS, como Bootstrap ou Tailwind.
Adicionar validações mais robustas para entradas do usuário.
Implementar responsividade, e efetuar testes unitários para as funções JavaScript.
Atender outros requisitos pertinentes ao controle do estoque, a medida que for surgindo e ter a necessidade de incluir.

**Licença**: 

Este projeto simples de estoque, pode ser modificado e está disponível, desde que seja usuado para fins de estudo e não para uso comercial. 
Baseado no controle de estoque sugerido pelo Sebrae SP para microempreendedores, mas somente segui o critério de entrada de produtos, e a saída, baseada no estoque mínimo, sem o registro dos fornecedores nesta versão. Assim fui implementando algo que pensei ser útil, mas de maneira simples para facilitar o controle e manutenção do cadastro dos produtos.


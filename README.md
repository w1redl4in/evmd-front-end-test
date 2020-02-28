# EVMD Front-End/Mobile Test

## Instruções
- Dê um fork deste repositório.
- Ao finalizar o desafio, faça o commit e, em seguida crie uma pull request neste repositório.

## Desafio
Dentro do projeto criado existem duas telas que serão a base do desafio: Home e Details.

O desafio consiste em fazer a leitura da única tabela do banco de dados (SQLite) existente na aplicação e criar uma listagem dos usuários desta tabela na tela *Home*. Ao clicar em um destes usuários, o aplicativo deverá abrir a tela *Details* com os detalhes do usuário selecionado anteriormente.

O nome do banco de dados, para criar a conexão, está salvo dentro das variáveis de ambiente.

## Regras/Requisitos

- Utilizar Expo
- Utilizar o componente **UserCard** já criado na pasta *components* para os itens da listagem
- Paginação (Lazy Load/Scroll Infinito)
- Utilizar Prop-Types
- Utilizar REDUX para o salvar o usuário que foi selecionado para abrir na tela de detalhes.

## Desejável
- Utilizar as melhores práticas para performance de melhor desempenho do app.

# Boas-vindas ao repositório do projeto Talker Manager!

<!-- # Como ficou o projeto ?

# Link da Aplicação -->

# Habilidades necessárias

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto pude desenvolver:

1. Runtime Assíncrono
2. API REST com Express
3. Middlewares
4. Métodos e módulos do Node.js

</details>

# O que é a aplaicação ?

<details>
  <summary><strong>:convenience_store: Desenvolvimento </strong></summary><br />

  Construi uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso:
  1. Desenvolvi uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolvi alguns endpoints que podem ler e escrever em um arquivo utilizando o módulo `fs`.
</details>

# Orientações

<details>
   <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />

  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > Execute a aplicação com `npm start` ou `npm run dev`


  :eyes: **De olho na dica:** 

  A extensão `Remote - Containers` do VS Code (que estará na seção de extensões recomendadas do programa) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.
  <br/>
</details>

# Como rodar na sua máquina ? 

<details>
  <summary><strong>‼️ Teste em sua máquina</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:Matheusfull/Project-20-Back-end-talker-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd Project-20-Back-end-talker-manager`

  2. Instale as dependências

  - `npm install`.

  3. Testando os Comandos :

  - `As rotas já foram implmentadas, agora só testar o CRUD e se divertir.`.

  </details>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

<!--
1 - Boas vindas
2 - imagem/gif da aplicação
3 - link do deploy
4 - Habilidades necessárias para realizar o projeto
5 - O que é aquele projeto
6 - Como baixar e rodar na máquina
-->
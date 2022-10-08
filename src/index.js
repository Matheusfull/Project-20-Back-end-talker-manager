const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
// const path = require('path');
// const talkers = require('./talker.json');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  // const dataPath = path.resolve(__dirname, 'talker.json');
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const talkersJson = JSON.parse(data);
  res.status(200).json(talkersJson);
  console.log('tudo certo no primeiro endpoint');
  /* if (!talkers) {
    return res.status(200).send([]);
  }
  return res.status(200).json(talkers); */
});

app.get('/talker/:id', async (req, res) => {
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const talkersJson = JSON.parse(data);
  const { id } = req.params;
  const talkerPerson = talkersJson.find((talker) => talker.id === Number(id));
  console.log(talkerPerson);
  if (talkerPerson === undefined) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talkerPerson);
});

app.listen(PORT, () => {
  console.log('Online');
});

/*
Requisito 1
- Crie um endpoint do tipo GET com a rota /talker, que possa listar todas as atividades do array. Ele será assíncrono, portanto: async
- Leremos os dados no arquivo talker.json
- Converteremos para json
- Responderemos com um status ok (200) com o mesmo json lido anteriormente
*/

/*
Requisito 2
- Usaremos o método get vindo do arquivo app com a rota /talker/:id e em seguido o middleware assíncrono.
- Precisaremos de alguns dados para trabalhar, tais como: 1- o arquivo lido e convertido, 2- e o id que vem lá na URL, como um parâmetro de rota. Com isso podemo procurar dentres os objetos que estão no arquivo lido, aquele que tem o mesmo id passado na URL.
    - 1 - Para termos o arquivo lido, vamos fazer o mesmo processo anterior:
    - Ler o arquivo com o fs.readFile
    - Converte-o para objeto.
    - 2 - Pegaremos o id da url pela desestruturação: { id } = req.params;
- Já temos o array de objetos e o id, agora só encontrar o objeto que tenha o mesmo id passado na url. Usaremos o find
- Se nenhum objeto for encontrado, responderemos com um status not found
- Se for encontrado, responderemos com um status ok e o mandaremos.
*/
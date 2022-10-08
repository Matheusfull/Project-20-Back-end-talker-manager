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

/* app.get('/talker/:id', async (req, res) => {
  const data = await fs.readFile('src/talker.json', 'utf-8');
  const talkersJson = JSON.parse(data);
  const { id } = req.params;
  const talkerPerson = talkersJson.find((talker) => talker.id === Number(id));
  console.log(talkerPerson);
  if (talkerPerson === undefined) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talkerPerson);
}); */

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
/* eslint-disable sonarjs/no-duplicate-string */
const express = require('express');
const bodyParser = require('body-parser');
/* const fs = require('fs').promises;
const crypto = require('crypto'); */
const talkerRouter = require('./routes/talkerRouter');
const talkerLoginRouter = require('./routes/talkerLoginRouter');
/* const emailValidate = require('./middleware/emailValidate');
const authValidate = require('./middleware/authValidate');
const nameValidate = require('./middleware/nameValidate');
const ageValidate = require('./middleware/ageValidate');
const talkValidate = require('./middleware/talkValidate');
const watchedAtValidate = require('./middleware/watchedAtValidate');
const rateValidate = require('./middleware/rateValidate'); */

/* function generateToken() {
  return crypto.randomBytes(8).toString('hex');
} */

const app = express();
app.use(bodyParser.json());
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);
app.use('/login', talkerLoginRouter);

/* const talkerJsonPath = 'src/talker.json';
// const leitor = fs.readFile(talkerJsonPath, 'utf-8');

app.get('/talker/search', authValidate, async (req, res) => {
  const searchTerm = req.query.q;
  const dataSearch = await fs.readFile(talkerJsonPath, 'utf-8');
  const talkersJson = JSON.parse(dataSearch);
  if (!searchTerm || searchTerm === '') {
    return res.status(200).json(talkersJson);
  }
  const talker = talkersJson.filter((el) => el.name.includes(searchTerm));
  if (!talker) return res.status(200).json([]);
  return res.status(200).json(talker);
});

app.get('/talker', async (_req, res) => {
  // const dataPath = path.resolve(__dirname, 'talker.json');
  // const data = await fs.readFile(talkerJsonPath, 'utf-8');
  // const talkersJson = JSON.parse(data);
  // res.status(200).json(talkersJson);
  // if (!talkers) {
  // return res.status(200).send([]);
  // }
  // return res.status(200).json(talkers); 
  try {
    const data = await fs.readFile(talkerJsonPath, 'utf-8');
    const talkersJson = JSON.parse(data);
    return res.status(200).json(talkersJson);
    // console.log(data);
    // console.log(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.get('/talker/:id', async (req, res) => {
  try {
    const dataget = await fs.readFile(talkerJsonPath, 'utf-8');
    const talkersJson = JSON.parse(dataget);
    const { id } = req.params;
    const talkerPerson = talkersJson.find((talker) => talker.id === Number(id));
    // console.log(talkerPerson);
    if (talkerPerson === undefined) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talkerPerson);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post('/login', emailValidate, (req, res) => {
  try {
    return res.status(200).json({ token: generateToken() });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post('/talker', authValidate, nameValidate, ageValidate,
  talkValidate, watchedAtValidate, rateValidate, async (req, res) => {
    try {
      const newTalker = req.body;
      const datapost = await fs.readFile(talkerJsonPath, 'utf-8');
      const talkersJson = JSON.parse(datapost);
      const newId = talkersJson.length + 1; // aqui cria o id de forma dinâmica
      newTalker.id = newId;
      talkersJson.push(newTalker);
      // const newTalkerArray = [...talkersJson, newTalker]; pode fazer assim também
      const newTalkersJson = JSON.stringify(talkersJson);
      fs.writeFile('src/talker.json', newTalkersJson);
      return res.status(201).json(newTalker);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });

app.put('/talker/:id', authValidate, nameValidate, ageValidate,
  talkValidate, watchedAtValidate, rateValidate, async (req, res) => {
    const { id } = req.params;
    const talkerUpDate = req.body;
    const dataput = await fs.readFile(talkerJsonPath, 'utf-8');
    const talkersJson = JSON.parse(dataput);
    const talkeresFound = talkersJson.filter((talker) => talker.id !== Number(id));
    talkerUpDate.id = Number(id);
    const newTalkerArray = [...talkeresFound, talkerUpDate];
    // console.log(talkeresFound);
    const newTalkerJson = JSON.stringify(newTalkerArray);
    // console.log(newTalkerJson);
    fs.writeFile('src/talker.json', newTalkerJson);
    res.status(200).json(talkerUpDate);
  });

app.delete('/talker/:id', authValidate, async (req, res) => {
  const { id } = req.params;
  const datadelete = await fs.readFile(talkerJsonPath, 'utf-8');
  const talkersJson = JSON.parse(datadelete);
  const talkeresFound = talkersJson.filter((talker) => talker.id !== Number(id));
  // const newTalkerArray = [...talkeresFound];
  const newTalkerJson = JSON.stringify(talkeresFound);
  fs.writeFile('src/talker.json', newTalkerJson);
  return res.status(204).send();
}); */

app.listen(PORT, () => {
  console.log('Online');
});

/*
Requisito 1
- Crie um endpoint do tipo GET com a rota /talker, que possa listar o array. Ele será assíncrono, portanto: async
- Leremos os dados do arquivo talker.json. Para isso, usaremos o método fs.promise.readFile que aceita 2 parâmetros: 1 - o caminho do arquivo que será lido e 2 - o codificador dos dados, ou seja, qual codificador que vamos ler aquilo.
- Converteremos para json
- Responderemos com um status ok (200) com o mesmo json lido anteriormente
*/

/*
Requisito 2
- Usaremos o método get vindo do app com a rota /talker/:id e em seguida o middleware assíncrono.
- Precisaremos de alguns dados para trabalhar, tais como: 1- o arquivo lido e convertido, 2- e o id que vem lá na URL, como um parâmetro de rota. Com isso podemo procurar dentres os objetos que estão no arquivo lido, aquele que tem o mesmo id passado na URL.
    - 1 - Para termos o arquivo lido, vamos fazer o mesmo processo anterior:
    - Ler o arquivo com o fs.readFile
    - Convertê-lo para objeto.
    - 2 - Pegaremos o id da url pela desestruturação: { id } = req.params;
- Já temos o array de objetos e o id, agora só encontrar o objeto que tenha o mesmo id passado na url. Usaremos o find
- Se nenhum objeto for encontrado, responderemos com um status not found
- Se for encontrado, responderemos com um status ok e o mandaremos.
*/

/*
Requisito 3 
1 - Vamos verificar se há email e senha no corpo da requsição, se não tiver, avisaremos, caso contrário, mandaremos uma mensagem com um token uriundo da função generateToken.
*/

/*
Requisito 4
1 - Neste arquivo a única coisa que vamos fazer é passar o middleware
*/

/*
Requsito 5
Vamos cadastrar um talker através do método post e rota /talker
1 - Primeiro fazeremos as 6 validações.
2 - Pegaremos as informações no corpo da requisição ( e vamos adicionar no array que temos)
3 - Pego o arquivo para ler assincronamente, converto para objeto.
4 - Crio um id dinâmico para evitar erros
5 - Incluo esse abjeto da requisição na minha lista de objetos.
6 - Passa tudo para json e escreve tudão no arquivo.
7 - Depois disso tudo, vamos avisar ao cliente que deu bom kkk depois de tanto trabalho, há de dar bom
*/

/*
Requisito 6
- Faz todas as validações que já foram vistas no requisito 5
- Vamos pegar o id pelo parâmetro e as novas informações no corpo da requisição
- Ler e converter o arquivo para um array de objetos
- Vamos fazer um filtro, onde retiraremos o objeto que tem o mesmo id passado no parâmetro
- Colocaremos o mesmo id no objeto que passamos no corpo da rquisição.
- Vamos adicionar o objeto passado no corpo da requsição com os outros que foram filtrados
- Depois é só desconverter o arquivo
- Por fim vamos escrever isso tudo no arquivo json e responder que deu certo.
*/

/*
Requisito 7
O raciocínio é o mesmo do requisito anterior
- Pega o arquivo, le, converte e pega o id passado no parâmetro
- Faz um filtro retirando o objeto que tem o mesmo id passado no parâmetro de rota
- Pega esse filtro, converte para json e escreve no arquivo
- Avisa que deu bom e o objeto foi deletado.
*/

/*
Requisito 8
1 - Vamos colocar lá aquele middleware para fazer as autenticação do token
2 - Depois vamos pegar o termo pesquisado, para isso, vamos fazer a destruturação até o 'q' que será onde colocaremos a query (ou seja, o que estamos buscando)
3 - Vamos ler tudo e depois converter para json
4 - Se não tiver nada pesquisado ou for vazio, vamos retornar tudo que foi convertido anteiormente.
5 - Como vamos colocar uma parte do nome, precisamos saber se essa parte está inclusa em cada um dos nomes dos palestrantes. Aqueles que tiverem incluso o nome pesquisado, só trazer.
6 - Se for achado ninguém, traz um array vazio, caso contrário, traz a pessoa amada.
*/
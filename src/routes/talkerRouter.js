const express = require('express');
const fs = require('fs').promises;

const authValidate = require('../middleware/authValidate');
const nameValidate = require('../middleware/nameValidate');
const ageValidate = require('../middleware/ageValidate');
const talkValidate = require('../middleware/talkValidate');
const watchedAtValidate = require('../middleware/watchedAtValidate');
const rateValidate = require('../middleware/rateValidate');

const router = express.Router();

const talkerJsonPath = 'src/talker.json';
// const leitor = fs.readFile(talkerJsonPath, 'utf-8');

router.get('/search', authValidate, async (req, res) => {
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

router.get('/', async (_req, res) => {
  // const dataPath = path.resolve(__dirname, 'talker.json');
  /* const data = await fs.readFile(talkerJsonPath, 'utf-8');
  const talkersJson = JSON.parse(data);
  res.status(200).json(talkersJson); */
  /* if (!talkers) {
    return res.status(200).send([]);
  }
  return res.status(200).json(talkers); */
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

router.get('/:id', async (req, res) => {
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

router.post('/', authValidate, nameValidate, ageValidate,
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

router.put('/:id', authValidate, nameValidate, ageValidate,
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

router.delete('/:id', authValidate, async (req, res) => {
  const { id } = req.params;
  const datadelete = await fs.readFile(talkerJsonPath, 'utf-8');
  const talkersJson = JSON.parse(datadelete);
  const talkeresFound = talkersJson.filter((talker) => talker.id !== Number(id));
  // const newTalkerArray = [...talkeresFound];
  const newTalkerJson = JSON.stringify(talkeresFound);
  fs.writeFile('src/talker.json', newTalkerJson);
  return res.status(204).send();
});

module.exports = router;
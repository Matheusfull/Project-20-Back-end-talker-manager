// middlewares/auth.js
module.exports = (req, res, next) => {
    const { age } = req.body;
  
    // Caso o campo age não seja passado ou esteja vazio retorne um código de status 400
    if (!age || age.length === 0) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    // Caso a pessoa palestrante não tenha pelo menos 18 anos retorne status 400
    if (age < 18) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
      }
      next();
  };

  /*
  Requisito 5 
  Caso normal de validação da chave idade para verificar se ela axiste, não é valia e maior que 18
  */
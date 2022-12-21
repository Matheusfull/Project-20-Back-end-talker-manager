// middlewares/auth.js
module.exports = (req, res, next) => {
    const { name } = req.body;
  
    // Caso o campo name não seja passado ou esteja vazio retorne um código de status 400
    if (!name || name.length === 0) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    // Caso o nome não tenha pelo menos 3 caracteres retorne um código de status 400
    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
      }
      next();
  };

  /*
  Requisito 5
  Verificação se o nome existe ou não está vazio e se é maior que 2 caracteres
  */